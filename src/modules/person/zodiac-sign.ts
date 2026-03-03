import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random zodiac sign.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * zodiacSign(fakerCore) // 'Pisces'
 *
 * @since 8.0.0
 */
export function zodiacSign(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.person?.western_zodiac_sign,
      'person.western_zodiac_sign'
    )
  );
}
