import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random periodic table element.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * chemicalElement(fakerCore) // { symbol: 'H', name: 'Hydrogen', atomicNumber: 1 }
 * chemicalElement(fakerCore) // { symbol: 'Xe', name: 'Xenon', atomicNumber: 54 }
 * chemicalElement(fakerCore) // { symbol: 'Ce', name: 'Cerium', atomicNumber: 58 }
 *
 * @since 7.2.0
 */
export function chemicalElement(fakerCore: FakerCore): ChemicalElement {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.science?.chemical_element,
      'science.chemical_element'
    )
  );
}
