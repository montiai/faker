import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random ingredient name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ingredient(fakerCore) // 'butter'
 *
 * @since 9.0.0
 */
export function ingredient(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.food?.ingredient, 'food.ingredient')
  );
}
