import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random human-readable color name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * human(fakerCore) // 'red'
 *
 * @since 7.0.0
 */
export function human(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.color?.human, 'color.human')
  );
}
