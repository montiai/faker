import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

export interface Airplane {
  /**
   * The name of the airplane (e.g. `'Airbus A321'`).
   */
  readonly name: string;
  /**
   * The IATA code of the airplane (e.g. `'321'`).
   */
  readonly iataTypeCode: string;
}

/**
 * Generates a random airplane.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * airplane(fakerCore) // { name: 'Airbus A321neo', iataTypeCode: '32Q' }
 *
 * @since 8.0.0
 */
export function airplane(fakerCore: FakerCore): Airplane {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.airline?.airplane,
      'airline.airplane'
    )
  );
}
