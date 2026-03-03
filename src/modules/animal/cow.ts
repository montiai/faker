import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cow species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cow(fakerCore) // 'Brava'
 *
 * @since 5.5.0
 */
export function cow(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.cow, 'animal.cow')
  );
}
