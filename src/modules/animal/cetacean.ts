import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cetacean species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cetacean(fakerCore) // 'Spinner Dolphin'
 *
 * @since 5.5.0
 */
export function cetacean(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.cetacean, 'animal.cetacean')
  );
}
