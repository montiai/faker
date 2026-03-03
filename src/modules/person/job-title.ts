import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random job title.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * jobTitle(fakerCore) // 'Global Accounts Engineer'
 *
 * @since 8.0.0
 */
export function jobTitle(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.person?.job_title_pattern,
      'person.job_title_pattern'
    )
  );
}
