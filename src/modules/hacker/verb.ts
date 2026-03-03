import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random hacker/IT verb.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * verb(fakerCore) // 'copy'
 *
 * @since 2.0.1
 */
export function verb(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.hacker?.verb, 'hacker.verb')
  );
}
