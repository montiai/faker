import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a mime-type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * mimeType(fakerCore) // 'video/vnd.vivo'
 *
 * @since 3.1.0
 */
export function mimeType(fakerCore: FakerCore): string {
  const mimeTypeKeys = Object.keys(
    assertLocaleData(
      fakerCore.definitions.system?.mime_type,
      'system.mime_type'
    )
  );

  return arrayElement(fakerCore, mimeTypeKeys);
}
