import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ingverb(fakerCore) // 'navigating'
 *
 * @since 2.0.1
 */
export function ingverb(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.hacker?.ingverb, 'hacker.ingverb')
  );
}
