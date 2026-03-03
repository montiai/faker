import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random publisher.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * publisher(fakerCore) // 'Addison-Wesley'
 *
 * @since 9.1.0
 */
export function publisher(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.book?.publisher, 'book.publisher')
  );
}
