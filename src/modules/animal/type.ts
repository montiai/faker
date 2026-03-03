import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random animal type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * type(fakerCore) // 'crocodile'
 *
 * @since 5.5.0
 */
export function type(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.type, 'animal.type')
  );
}
