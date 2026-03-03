import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random fruit name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fruit(fakerCore) // 'lemon'
 *
 * @since 9.0.0
 */
export function fruit(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.food?.fruit, 'food.fruit')
  );
}
