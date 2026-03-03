import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * buzzAdjective(fakerCore) // 'one-to-one'
 *
 * @since 8.0.0
 */
export function buzzAdjective(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.company?.buzz_adjective,
      'company.buzz_adjective'
    )
  );
}
