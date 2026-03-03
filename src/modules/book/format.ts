import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random book format.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * format(fakerCore) // 'Hardcover'
 *
 * @since 9.1.0
 */
export function format(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.book?.format, 'book.format')
  );
}
