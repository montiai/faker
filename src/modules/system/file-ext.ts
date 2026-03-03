import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a file extension.
 *
 * @param fakerCore The FakerCore to use.
 * @param mimeType Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json)
 *
 * @example
 * fileExt(fakerCore) // 'emf'
 * fileExt(fakerCore, 'application/json') // 'json'
 *
 * @since 3.1.0
 */
export function fileExt(fakerCore: FakerCore, mimeType?: string): string {
  const mimeTypes = assertLocaleData(
    fakerCore.definitions.system?.mime_type,
    'system.mime_type'
  );

  if (typeof mimeType === 'string') {
    return arrayElement(fakerCore, mimeTypes[mimeType].extensions);
  }

  const extensionSet = new Set(
    Object.values(mimeTypes).flatMap(({ extensions }) => extensions)
  );
  return arrayElement(fakerCore, [...extensionSet]);
}
