import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SyntaxKind } from 'ts-morph';
import { getDeprecated, getJsDocs } from './apidocs/processing/jsdocs';
import { getProject } from './apidocs/project';
import { toCamelCase, toKebabCase } from './shared/character-case';
import { formatTypescript } from './shared/format';
import { FILE_PATH_SRC } from './shared/paths';

const project = getProject();

const directories = project
  .getDirectoryOrThrow('src')
  .getDirectoryOrThrow('modules')
  .getDirectories();

for (const directory of directories) {
  const moduleName = directory.getBaseName();

  console.log(`Processing module: ${moduleName}`);
  const indexFile = directory.getSourceFileOrThrow('index.ts');

  const header = indexFile
    .getStatements()[0]
    ?.getLeadingCommentRanges()
    .map((c) => c.getText());

  const imports = new Set([
    `import { fakerToCore } from '../../internal/faker-to-core';`,
    `import { SimpleModuleBase } from '../../internal/module-base';`,
    `import { ModuleBase } from '../../internal/module-base';`,
    `import type { Faker } from '../../faker';`,
    `import type { LiteralUnion } from '../../internal/types';`,
  ]);
  if (moduleName === 'image') {
    imports.add(`import type { SexType } from '../person';`);
  }

  const exports: string[] = indexFile
    .getExportDeclarations()
    .map((exp) => exp.getText());

  const typesFile = directory.getSourceFile('_types.ts');
  if (typesFile) {
    const typesToImport = [
      typesFile.getEnums(),
      typesFile.getTypeAliases(),
      typesFile.getInterfaces(),
    ]
      .flat()
      .filter((decl) => decl.isExported())
      .map((decl) => decl.getName());

    if (typesToImport.length > 0) {
      imports.add(
        `import type { ${typesToImport.join(', ')} } from './_types';`
      );
    }
  }

  const content: string[] = [];
  const classes = indexFile?.getClasses() ?? [];
  for (const cls of classes) {
    content.push(getJsDocs(cls).getText());
    const methodNames = cls.getMethods().map((method) => method.getName());
    for (const method of cls.getMethods()) {
      method.remove();
    }

    for (const methodName of methodNames) {
      const methodFile = directory.getSourceFileOrThrow(
        `${toKebabCase(methodName)}.ts`
      );

      const typesToImport = [
        methodFile.getEnums(),
        methodFile.getTypeAliases(),
        methodFile.getInterfaces(),
      ]
        .flat()
        .filter((decl) => decl.isExported())
        .map((decl) => decl.getName());

      imports.add(
        `import { ${methodName} as ${toCamelCase(moduleName, methodName)} } from './${toKebabCase(methodName)}';`
      );
      if (typesToImport.length > 0) {
        imports.add(
          `import type { ${typesToImport.join(', ')} } from './${toKebabCase(methodName)}';`
        );
      }

      const functions = methodFile
        .getChildrenOfKind(SyntaxKind.FunctionDeclaration)
        .filter((fn) => fn.isExported())
        .filter((fn) => fn.getName() === methodName);

      const parts: string[] = [];

      for (const child of functions) {
        const jsDocs = child.getJsDocs()[0];

        if (child.hasBody()) {
          const params = child
            .getSignature()
            .getParameters()
            .slice(1)
            .map((param) => param.getName());

          child.setBodyText(
            `${
              jsDocs && getDeprecated(jsDocs)
                ? '// eslint-disable-next-line @typescript-eslint/no-deprecated -- Internal call\n'
                : ''
            }return ${toCamelCase(moduleName, methodName)}(fakerToCore(this.faker), ${params.join(', ')});`
          );
        }

        if (jsDocs) {
          let description = jsDocs
            .getFullText()
            // Param
            .replace(' * @param fakerCore The FakerCore to use.\n', '')
            .replaceAll(/ +\*\n +\*\n/g, ' *\n')
            // Examples
            .replaceAll(
              new RegExp(`${methodName}\\(fakerCore(?:, ?)?`, 'g'),
              `faker.${moduleName}.${methodName}(`
            )
            // Method References
            .replaceAll(
              /\b([a-z]+)([A-Z][a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              (_, module: string, method: string) =>
                `faker.${module}.${toCamelCase(method)}(`
            )
            .replaceAll(
              /\b([a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              (_, method: string) =>
                `faker.${moduleName}.${toCamelCase(method)}(`
            );

          if (methodName === 'fake') {
            description = description.replaceAll(', [...]', '');
          }

          parts.push(description);
        }

        let signature = child.getSignature().getDeclaration().getText();
        signature = signature.replace('export function ', '');
        signature = signature.replace(/\((\n +)?fakerCore: FakerCore,?/, '(');
        parts.push(signature);
      }

      cls.addMember(
        parts
          .join('\n')
          .replaceAll(
            '[fakerCore.definitions]',
            '[this.faker, this.faker.rawDefinitions]'
          )
      );
    }

    content.push(cls.getText(), '');
  }

  content.unshift(...header, ...imports, '', ...exports, '');

  writeFileSync(
    resolve(FILE_PATH_SRC, 'modules', moduleName, 'index.ts'),
    await formatTypescript(content.join('\n')),
    'utf8'
  );
}
