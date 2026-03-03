import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random continent name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * continent(fakerCore) // 'Asia'
 *
 * @since 9.1.0
 */
export function continent(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.continent,
      'location.continent'
    )
  );
}
