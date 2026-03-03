import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { objectKey } from '../helpers/object-key';

/**
 * Returns a random credit card issuer.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * creditCardIssuer(fakerCore) // 'discover'
 *
 * @since 6.3.0
 */
export function creditCardIssuer(fakerCore: FakerCore): string {
  return objectKey(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.finance?.credit_card,
      'finance.credit_card'
    )
  ) as string;
}
