import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * buzzVerb(fakerCore) // 'empower'
 *
 * @since 8.0.0
 */
export function buzzVerb(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.company?.buzz_verb,
      'company.buzz_verb'
    )
  );
}
