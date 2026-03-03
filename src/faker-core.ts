import type { LocaleDefinition } from './definitions';
import type { FakerConfig } from './faker-config';
import type { Randomizer } from './randomizer';

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
