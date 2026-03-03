import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random job descriptor.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * jobDescriptor(fakerCore) // 'Customer'
 *
 * @since 8.0.0
 */
export function jobDescriptor(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.person?.job_descriptor,
      'person.job_descriptor'
    )
  );
}
