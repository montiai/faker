import { Faker } from '../faker';
import type { FakerCore } from '../faker-core';
import type { SimpleFaker } from '../simple-faker';

/**
 * Converts the given Faker instance to a FakerCore to be used in standalone module functions.
 *
 * @param faker The Faker instance to convert.
 *
 * @returns The converted FakerCore instance.
 */
export function fakerToCore(faker: SimpleFaker | Faker): FakerCore {
  return {
    definitions: faker instanceof Faker ? faker.rawDefinitions : {},
    // @ts-expect-error: access private member field
    randomizer: faker._randomizer,
    config: {
      // @ts-expect-error: access private member field
      defaultRefDate: faker._defaultRefDate,
    },
  };
}
