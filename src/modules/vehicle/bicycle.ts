import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a type of bicycle.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bicycle(fakerCore) // 'Adventure Road Bicycle'
 *
 * @since 5.5.0
 */
export function bicycle(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.vehicle?.bicycle_type,
      'vehicle.bicycle_type'
    )
  );
}
