import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random job area.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * jobArea(fakerCore) // 'Brand'
 *
 * @since 8.0.0
 */
export function jobArea(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.person?.job_area, 'person.job_area')
  );
}
