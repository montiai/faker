import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random ordinal direction (northwest, southeast, etc).
 *
 * @param fakerCore The FakerCore to use.
 * @param options Whether to use abbreviated or an options object.
 * @param options.abbreviated If true this will return abbreviated directions (NW, SE, etc).
 * Otherwise this will return the long name. Defaults to `false`.
 *
 * @example
 * ordinalDirection(fakerCore) // 'Northeast'
 * ordinalDirection(fakerCore, { abbreviated: true }) // 'SW'
 *
 * @since 8.0.0
 */
export function ordinalDirection(
  fakerCore: FakerCore,
  options: {
    /**
     * If true this will return abbreviated directions (NW, SE, etc).
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
      ).ordinal
    );
  }

  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.location?.direction,
      'location.direction'
    ).ordinal_abbr
  );
}
