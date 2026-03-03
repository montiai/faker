import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random horse breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * horse(fakerCore) // 'Swedish Warmblood'
 *
 * @since 5.5.0
 */
export function horse(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.horse, 'animal.horse')
  );
}
