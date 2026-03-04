import type { LocaleDefinition } from './definitions';
import type { FakerConfig } from './faker-config';
import type { Randomizer } from './randomizer';
import { mergeLocales } from './utils/merge-locales';
import { generateMersenne53Randomizer } from './utils/mersenne';

/**
 * Container that is passed to all methods. It contains the locale definitions, the randomizer and the configuration.
 */
export interface FakerCore {
  /**
   * The locale definitions to use.
   */
  readonly definitions: LocaleDefinition;
  /**
   * The randomizer used to generate random values.
   */
  readonly randomizer: Randomizer;
  /**
   * The configuration options for all methods.
   */
  readonly config: FakerConfig;
}

/**
 * Helper function to create a FakerCore instance.
 *
 * @param options The options to create the FakerCore instance with.
 * @param options.definitions The locale definitions to use.
 * If not provided, this core will not have any locale data and thus all methods that rely on locale data will throw an error when called.
 * This can be useful if you want to use least amount of memory possible and only use methods that do not rely on locale data.
 * @param options.randomizer The randomizer used to generate random values.
 * Defaults to `generateMersenne53Randomizer()`.
 * @param options.config The configuration options for all methods.
 * Defaults to an empty config.
 *
 * @returns The newly created FakerCore instance.
 *
 * @example
 * import { createFakerCore, en } from '@faker-js/faker';
 *
 * createFakerCore() // no locale data, default randomizer and empty config
 * createFakerCore({ definitions: en }) // custom locale data, default randomizer and empty config
 *
 * @since 10.4.0
 */
export function createFakerCore(
  options: {
    /**
     * The locale definitions to use. If not provided, this core will not have any locale data and thus all methods that rely on locale data will throw an error when called.
     *
     * @default {}
     */
    definitions?: LocaleDefinition | LocaleDefinition[];
    /**
     * The randomizer used to generate random values.
     *
     * @default generateMersenne53Randomizer()
     */
    randomizer?: Randomizer;
    /**
     * The configuration options for all methods.
     *
     * @default {}
     */
    config?: FakerConfig;
  } = {}
): FakerCore {
  const { definitions, randomizer, config } = options;
  return {
    definitions: Array.isArray(definitions)
      ? mergeLocales(definitions)
      : (definitions ?? {}),
    randomizer: randomizer ?? generateMersenne53Randomizer(),
    config: config ?? {},
  };
}
