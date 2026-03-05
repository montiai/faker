import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';
import { selectDefinition } from './_select-definition';
import type { SexType } from './sex-type';

/**
 * Returns a random middle name.
 *
 * @param fakerCore The FakerCore to use.
 * @param sex The optional sex to use.
 * Can be either `'female'` or `'male'`.
 *
 * @example
 * middleName(fakerCore) // 'James'
 * middleName(fakerCore, 'female') // 'Eloise'
 * middleName(fakerCore, 'male') // 'Asher'
 *
 * @since 8.0.0
 */
export function middleName(fakerCore: FakerCore, sex?: SexType): string {
  return arrayElement(
    fakerCore,
    selectDefinition(
      fakerCore,
      sex,
      assertLocaleData(
        fakerCore.definitions.person?.middle_name,
        'person.middle_name'
      )
    )
  );
}
