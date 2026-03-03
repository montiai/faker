import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random fish species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fish(fakerCore) // 'Mandarin fish'
 *
 * @since 5.5.0
 */
export function fish(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.fish, 'animal.fish')
  );
}
