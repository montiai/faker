import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random direction (cardinal and ordinal; northwest, east, etc).
 *
 * @param fakerCore The FakerCore to use.
 * @param options The options to use.
 * @param options.abbreviated If true this will return abbreviated directions (NW, E, etc).
 * Otherwise this will return the long name. Defaults to `false`.
 *
 * @example
 * direction(fakerCore) // 'Northeast'
 * direction(fakerCore, { abbreviated: true }) // 'SW'
 *
 * @since 8.0.0
 */
export function direction(
  fakerCore: FakerCore,
  options: {
    /**
     * If true this will return abbreviated directions (NW, E, etc).
     * Otherwise this will return the long name.
     *
     * @default false
     */
    abbreviated?: boolean;
  } = {}
): string {
  const { abbreviated = false } = options;

  if (!abbreviated) {
    return arrayElement(fakerCore, [
      ...assertLocaleData(
        fakerCore.definitions.location?.direction,
        'location.direction'
      ).cardinal,
      ...assertLocaleData(
        fakerCore.definitions.location?.direction,
        'location.direction'
      ).ordinal,
    ]);
  }

  return arrayElement(fakerCore, [
    ...assertLocaleData(
      fakerCore.definitions.location?.direction,
      'location.direction'
    ).cardinal_abbr,
    ...assertLocaleData(
      fakerCore.definitions.location?.direction,
      'location.direction'
    ).ordinal_abbr,
  ]);
}
