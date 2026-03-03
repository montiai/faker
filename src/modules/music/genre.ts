import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random music genre.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * genre(fakerCore) // 'Reggae'
 *
 * @since 5.2.0
 */
export function genre(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.music?.genre, 'music.genre')
  );
}
