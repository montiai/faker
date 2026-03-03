import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random hacker/IT adjective.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * adjective(fakerCore) // 'cross-platform'
 *
 * @since 2.0.1
 */
export function adjective(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.hacker?.adjective,
      'hacker.adjective'
    )
  );
}
