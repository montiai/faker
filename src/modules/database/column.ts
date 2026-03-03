import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database column name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * column(fakerCore) // 'createdAt'
 *
 * @since 4.0.0
 */
export function column(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.database?.column, 'database.column')
  );
}
