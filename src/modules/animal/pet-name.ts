import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random pet name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * petName(fakerCore) // 'Coco'
 *
 * @since 9.2.0
 */
export function petName(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.pet_name, 'animal.pet_name')
  );
}
