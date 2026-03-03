import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cardinal direction (north, east, south, west).
 *
 * @param fakerCore The FakerCore to use.
 * @param options The options to use.
 * @param options.abbreviated If true this will return abbreviated directions (N, E, etc).
 * Otherwise this will return the long name. Defaults to `false`.
 *
 * @example
 * cardinalDirection(fakerCore) // 'North'
 * cardinalDirection(fakerCore, { abbreviated: true }) // 'W'
 *
 * @since 8.0.0
 */
export function cardinalDirection(
  fakerCore: FakerCore,
  options: {
    /**
     * If true this will return abbreviated directions (N, E, etc).
     * Otherwise this will return the long name.
     *
     * @default false
     */
    abbreviated?: boolean;
  } = {}
): string {
  const { abbreviated = false } = options;

  if (!abbreviated) {
    return arrayElement(
      fakerCore,
      assertLocaleData(
        fakerCore.definitions.location?.direction,
        'location.direction'
      ).cardinal
    );
  }

  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.direction,
      'location.direction'
    ).cardinal_abbr
  );
}
