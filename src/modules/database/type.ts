import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database column type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * type(fakerCore) // 'timestamp'
 *
 * @since 4.0.0
 */
export function type(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.database?.type, 'database.type')
  );
}
