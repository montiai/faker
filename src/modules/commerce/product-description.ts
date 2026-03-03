import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Returns a product description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productDescription(fakerCore) // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
 *
 * @since 5.0.0
 */
export function productDescription(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.commerce?.product_description,
      'commerce.product_description'
    )
  );
}
