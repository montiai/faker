import type { FakerCore } from '../../faker-core';
import { numeric } from '../string/numeric';

/**
 * Generates a random routing number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * routingNumber(fakerCore) // '522814402'
 *
 * @since 5.0.0
 */
export function routingNumber(fakerCore: FakerCore): string {
  const routingNumber = numeric(fakerCore, {
    length: 8,
    allowLeadingZeros: true,
  });

  // Modules 10 straight summation.
  let sum = 0;

  for (let i = 0; i < routingNumber.length; i += 3) {
    sum += Number(routingNumber[i]) * 3;
    sum += Number(routingNumber[i + 1]) * 7;
    sum += Number(routingNumber[i + 2]) || 0;
  }

  return `${routingNumber}${Math.ceil(sum / 10) * 10 - sum}`;
}
