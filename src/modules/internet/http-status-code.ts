import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random HTTP status code.
 *
 * @param fakerCore The FakerCore to use.
 * @param options Options object.
 * @param options.types A list of the HTTP status code types that should be used.
 *
 * @example
 * httpStatusCode(fakerCore) // 200
 * httpStatusCode(fakerCore, { types: ['success', 'serverError'] }) // 500
 *
 * @since 7.0.0
 */
export function httpStatusCode(
  fakerCore: FakerCore,
  options: {
    /**
     * A list of the HTTP status code types that should be used.
     *
     * @default Object.keys(faker.definitions.internet.http_status_code)
     */
    types?: ReadonlyArray<HTTPStatusCodeType>;
  } = {}
): number {
  const {
    types = Object.keys(
      assertLocaleData(
        fakerCore.definitions.internet?.http_status_code,
        'internet.http_status_code'
      )
    ) as HTTPStatusCodeType[],
  } = options;
  const httpStatusCodeType = arrayElement(fakerCore, types);
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.internet?.http_status_code,
      'internet.http_status_code'
    )[httpStatusCodeType]
  );
}
