import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { numeric } from '../string/numeric';

/**
 * Generates a random localized secondary address. This refers to a specific location at a given address
 * such as an apartment or room number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * secondaryAddress(fakerCore) // 'Apt. 861'
 *
 * @since 8.0.0
 */
export function secondaryAddress(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.secondary_address,
      'location.secondary_address'
    )
  ).replaceAll(/#+/g, (m) =>
    numeric(fakerCore, {
      length: m.length,
      allowLeadingZeros: false,
    })
  );
}
