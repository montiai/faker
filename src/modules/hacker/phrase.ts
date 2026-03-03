import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random hacker/IT phrase.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * phrase(fakerCore)
 * // 'If we override the card, we can get to the HDD feed through the back-end HDD sensor!'
 *
 * @since 2.0.1
 */
export function phrase(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(fakerCore.definitions.hacker?.phrase, 'hacker.phrase')
  );
}
