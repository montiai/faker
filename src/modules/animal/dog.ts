import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random dog breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * dog(fakerCore) // 'Irish Water Spaniel'
 *
 * @since 5.5.0
 */
export function dog(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.dog, 'animal.dog')
  );
}
