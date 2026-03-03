import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random bird species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bird(fakerCore) // 'Buller's Shearwater'
 *
 * @since 5.5.0
 */
export function bird(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.bird, 'animal.bird')
  );
}
