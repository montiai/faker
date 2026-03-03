import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random transaction description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * transactionDescription(fakerCore)
 * // 'payment transaction at Emard LLC using card ending with ****9187 for HNL 506.57 in account ***2584.'
 *
 * @since 5.1.0
 */
export function transactionDescription(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.finance?.transaction_description_pattern,
      'finance.transaction_description_pattern'
    )
  );
}
