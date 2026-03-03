import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random person suffix.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * suffix(fakerCore) // 'DDS'
 *
 * @since 8.0.0
 */
export function suffix(fakerCore: FakerCore): string {
  // TODO @Shinigami92 2022-03-21: Add female_suffix and male_suffix
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.person?.suffix, 'person.suffix')
  );
}
