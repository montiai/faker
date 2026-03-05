import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Returns a random short biography
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bio(fakerCore) // 'oatmeal advocate, veteran 🐠'
 *
 * @since 8.0.0
 */
export function bio(fakerCore: FakerCore): string {
  const bio_pattern = assertLocaleData(
    fakerCore.definitions.person?.bio_pattern,
    'person.bio_pattern'
  );

  return fake(fakerCore, bio_pattern);
}
