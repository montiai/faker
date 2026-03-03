import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random rabbit species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * rabbit(fakerCore) // 'Florida White'
 *
 * @since 5.5.0
 */
export function rabbit(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.rabbit, 'animal.rabbit')
  );
}
