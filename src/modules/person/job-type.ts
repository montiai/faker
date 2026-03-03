import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random job type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * jobType(fakerCore) // 'Assistant'
 *
 * @since 8.0.0
 */
export function jobType(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.person?.job_type, 'person.job_type')
  );
}
