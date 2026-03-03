import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a vehicle type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * type(fakerCore) // 'Coupe'
 *
 * @since 5.0.0
 */
export function type(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.vehicle?.type, 'vehicle.type')
  );
}
