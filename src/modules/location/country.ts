import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random country name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * country(fakerCore) // 'Greece'
 *
 * @since 8.0.0
 */
export function country(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.country,
      'location.country'
    )
  );
}
