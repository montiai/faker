import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random bear species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bear(fakerCore) // 'Asian black bear'
 *
 * @since 5.5.0
 */
export function bear(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.bear, 'animal.bear')
  );
}
