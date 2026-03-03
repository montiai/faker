import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random scientific unit.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * unit(fakerCore) // { name: 'meter', symbol: 'm' }
 * unit(fakerCore) // { name: 'second', symbol: 's' }
 * unit(fakerCore) // { name: 'mole', symbol: 'mol' }
 *
 * @since 7.2.0
 */
export function unit(fakerCore: FakerCore): Unit {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.science?.unit, 'science.unit')
  );
}
