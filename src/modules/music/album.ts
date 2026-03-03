import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random album name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * album(fakerCore) // '1989'
 *
 * @since 9.0.0
 */
export function album(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.music?.album, 'music.album')
  );
}
