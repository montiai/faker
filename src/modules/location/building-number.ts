import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';
import { numeric } from '../string/numeric';

/**
 * Generates a random building number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * buildingNumber(fakerCore) // '379'
 *
 * @since 8.0.0
 */
export function buildingNumber(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.building_number,
      'location.building_number'
    )
  ).replaceAll(/#+/g, (m) =>
    numeric(fakerCore, {
      length: m.length,
      allowLeadingZeros: false,
    })
  );
}
