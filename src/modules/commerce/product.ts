import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a short product name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * product(fakerCore) // 'Computer'
 *
 * @since 3.0.0
 */
export function product(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.commerce?.product_name,
      'commerce.product_name'
    ).product
  );
}
