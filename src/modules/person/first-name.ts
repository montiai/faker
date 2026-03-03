import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random first name.
 *
 * @param fakerCore The FakerCore to use.
 * @param sex The optional sex to use.
 * Can be either `'female'` or `'male'`.
 *
 * @example
 * firstName(fakerCore) // 'Antwan'
 * firstName(fakerCore, 'female') // 'Victoria'
 * firstName(fakerCore, 'male') // 'Tom'
 *
 * @since 8.0.0
 */
export function firstName(fakerCore: FakerCore, sex?: SexType): string {
  return arrayElement(
    fakerCore,
    selectDefinition(
      fakerCore,
      sex,
      assertLocaleData(
        fakerCore.definitions.person?.first_name,
        'person.first_name'
      )
    )
  );
}
