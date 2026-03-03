import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random color space name from the worldwide accepted color spaces.
 * Source: https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * space(fakerCore) // 'sRGB'
 *
 * @since 7.0.0
 */
export function space(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.color?.space, 'color.space')
  );
}
