import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * buzzNoun(fakerCore) // 'paradigms'
 *
 * @since 8.0.0
 */
export function buzzNoun(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.company?.buzz_noun,
      'company.buzz_noun'
    )
  );
}
