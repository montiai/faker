import { SyntaxKind } from 'ts-morph';
import { getProject } from './apidocs/project';
import { toCamelCase } from './shared/character-case';

const project = getProject();

const directories = project
  .getDirectoryOrThrow('src')
  .getDirectoryOrThrow('modules')
  .getDirectories();

for (const directory of directories) {
  const moduleName = directory.getBaseName();
  if (moduleName !== 'helpers') {
    continue;
  }

  const imports = [];
  const module = [];
  const indexFile = directory.getSourceFile('index.ts');
  indexFile?.getClasses();

  //console.log(`- name: ${module}`);
  const files = directory.getSourceFiles();
  for (const file of files) {
    const fileName = file.getBaseNameWithoutExtension();

    if (
      fileName.startsWith('_') ||
      fileName === 'index' ||
      fileName !== 'shuffle'
    ) {
      continue; // Skip private files
    }

    const functions = file
      .getChildrenOfKind(SyntaxKind.FunctionDeclaration)
      .filter((fn) => fn.isExported());
    const functionName = functions[0].getNameOrThrow();
    //console.log(`  - ${functionName}`);

    for (const child of functions) {
      //console.log(`    - ${child.getName()}`);
      if (child.hasBody()) {
        const params = child
          .getSignature()
          .getParameters()
          .slice(1)
          .map((param) => param.getName());
        child.setBodyText(
          `return ${toCamelCase(moduleName, functionName)}(fakerToCore(this.faker), ${params.join(', ')});`
        );
      }

      const jsDocs = child.getJsDocs()[0];
      if (jsDocs) {
        let description = jsDocs.getFullText();
        description = description.replace(
          ' * @param fakerCore The FakerCore to use.\n',
          ''
        );
        description = description.replaceAll(
          new RegExp(` \\* ${functionName}\\(fakerCore(, ?)?`, 'g'),
          ` * faker.${moduleName}.${functionName}(`
        );
        console.log(description);
      }

      let signature = child.getSignature().getDeclaration().getText();
      signature = signature.replace('export function ', '');
      signature = signature.replace(/\((\n +)?fakerCore: FakerCore,?/, '(');
      console.log(signature);

      // console.log(`    - ${child.getSignature().getDeclaration().getText()}`);
    }
  }
}
