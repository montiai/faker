import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random JWT (JSON Web Token) Algorithm.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see jwt(fakerCore): For generating random JWT (JSON Web Token).
 *
 * @example
 * jwtAlgorithm(fakerCore) // 'HS256'
 * jwtAlgorithm(fakerCore) // 'RS512'
 *
 * @since 9.1.0
 */
export function jwtAlgorithm(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.internet?.jwt_algorithm,
      'internet.jwt_algorithm'
    )
  );
}
