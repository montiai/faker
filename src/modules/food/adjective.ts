import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random dish adjective.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * adjective(fakerCore) // 'crispy'
 *
 * @since 9.0.0
 */
export function adjective(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.food?.adjective, 'food.adjective')
  );
}
