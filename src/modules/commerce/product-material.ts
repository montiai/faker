import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a material of a product.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productMaterial(fakerCore) // 'Rubber'
 *
 * @since 3.0.0
 */
export function productMaterial(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.commerce?.product_name,
      'commerce.product_name'
    ).material
  );
}
