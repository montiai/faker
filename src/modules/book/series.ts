import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random series.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * series(fakerCore) // 'Harry Potter'
 *
 * @since 9.1.0
 */
export function series(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.book?.series, 'book.series')
  );
}
