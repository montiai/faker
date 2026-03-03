import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random artist name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * artist(fakerCore) // 'The Beatles'
 *
 * @since 9.0.0
 */
export function artist(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.music?.artist, 'music.artist')
  );
}
