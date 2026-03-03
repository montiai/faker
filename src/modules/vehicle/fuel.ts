import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a fuel type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fuel(fakerCore) // 'Electric'
 *
 * @since 5.0.0
 */
export function fuel(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.vehicle?.fuel, 'vehicle.fuel')
  );
}
