import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random descriptive product name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productName(fakerCore) // 'Incredible Soft Gloves'
 *
 * @since 3.0.0
 */
export function productName(fakerCore: FakerCore): string {
  const patterns = assertLocaleData(
    fakerCore.definitions.commerce?.product_name,
    'commerce.product_name'
  ).pattern;
  return fake(fakerCore, patterns);
}
