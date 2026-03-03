import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random genre.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * genre(fakerCore) // 'Fantasy'
 *
 * @since 9.1.0
 */
export function genre(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.book?.genre, 'book.genre')
  );
}
