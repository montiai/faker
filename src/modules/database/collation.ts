import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database collation.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * collation(fakerCore) // 'utf8_unicode_ci'
 *
 * @since 4.0.0
 */
export function collation(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.database?.collation,
      'database.collation'
    )
  );
}
