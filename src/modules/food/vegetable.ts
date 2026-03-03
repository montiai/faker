import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random vegetable name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vegetable(fakerCore) // 'broccoli'
 *
 * @since 9.0.0
 */
export function vegetable(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.food?.vegetable, 'food.vegetable')
  );
}
