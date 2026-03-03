import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a vehicle model.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * model(fakerCore) // 'Explorer'
 *
 * @since 5.0.0
 */
export function model(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.vehicle?.model, 'vehicle.model')
  );
}
