import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random gender.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see sex(fakerCore): For generating a binary-gender value.
 *
 * @example
 * gender(fakerCore) // 'Trans*Man'
 *
 * @since 8.0.0
 */
export function gender(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.person?.gender, 'person.gender')
  );
}
