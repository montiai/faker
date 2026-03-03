import { FakerError } from '../../errors/faker-error';
import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';
import { fake } from '../helpers/fake';
import { replaceSymbols } from '../helpers/replace-symbols';

/**
 * Generates random zip code from specified format. If format is not specified,
 * the locale's zip format is used.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The format used to generate the zip code or an options object.
 * @param options.state The state to generate the zip code for.
 * If the current locale does not have a corresponding `postcode_by_state` definition, an error is thrown.
 * @param options.format The optional format used to generate the zip code.
 * By default, a random format is used from the locale zip formats.
 * This won't be used if the state option is specified.
 *
 * @see helpersReplaceSymbols(fakerCore): For more information about how the pattern is used.
 *
 * @example
 * zipCode(fakerCore) // '17839'
 * zipCode(fakerCore, '####') // '6925'
 *
 * @since 8.0.0
 */
export function zipCode(
  fakerCore: FakerCore,
  options:
    | string
    | {
        /**
         * The state to generate the zip code for.
         *
         * If the current locale does not have a corresponding `postcode_by_state` definition, an error is thrown.
         */
        state?: string;
        /**
         * The optional format used to generate the zip code.
         *
         * This won't be used if the state option is specified.
         *
         * @default faker.definitions.location.postcode
         */
        format?: string;
      } = {}
): string {
  if (typeof options === 'string') {
    options = { format: options };
  }

  const { state } = options;

  if (state != null) {
    const zipPattern = assertLocaleData(
      fakerCore.definitions.location?.postcode_by_state,
      'location.postcode_by_state'
    )[state];

    if (zipPattern == null) {
      throw new FakerError(`No zip code definition found for state "${state}"`);
    }

    return fake(fakerCore, zipPattern);
  }

  let {
    format = assertLocaleData(
      fakerCore.definitions.location?.postcode,
      'location.postcode'
    ),
  } = options;
  if (typeof format === 'string') {
    format = [format];
  }

  format = arrayElement(fakerCore, format);

  return replaceSymbols(fakerCore, format);
}
