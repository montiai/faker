import type { FakerCore } from '../../faker-core';
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
  const { bio_pattern } = fakerCore.definitions.person;

  return fake(fakerCore, bio_pattern);
}
