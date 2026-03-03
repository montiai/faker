import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random localized city name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * city(fakerCore) // 'East Jarretmouth'
 * fakerDE.location.city() // 'Bad Lilianadorf'
 *
 * @since 8.0.0
 */
export function city(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.city_pattern,
      'location.city_pattern'
    )
  );
}
