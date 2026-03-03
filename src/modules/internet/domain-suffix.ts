import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random domain suffix.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * domainSuffix(fakerCore) // 'com'
 * domainSuffix(fakerCore) // 'name'
 *
 * @since 2.0.1
 */
export function domainSuffix(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.internet?.domain_suffix,
      'internet.domain_suffix'
    )
  );
}
