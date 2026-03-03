import { FakerError } from '../../errors/faker-error';
import type { FakerCore } from '../../faker-core';
import { toDate } from '../../internal/date';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { between } from '../date/between';

/**
 * Generates a random date in the future.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.years The range of years the date may be in the future. Defaults to `1`.
 * @param options.refDate The date to use as reference point for the newly generated date. Defaults to `getDefaultRefDate(fakerCore)`.
 *
 * @see soon(fakerCore): For generating dates in the near future (days instead of years).
 *
 * @example
 * future(fakerCore) // '2022-11-19T05:52:49.100Z'
 * future(fakerCore, { years: 10 }) // '2030-11-23T09:38:28.710Z'
 * future(fakerCore, { years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-12-13T22:45:10.252Z'
 *
 * @since 8.0.0
 */
export function future(
  fakerCore: FakerCore,
  options: {
    /**
     * The range of years the date may be in the future.
     *
     * @default 1
     */
    years?: number;
    /**
     * The date to use as reference point for the newly generated date.
     *
     * @default getDefaultRefDate(fakerCore)
     */
    refDate?: string | Date | number;
  } = {}
): Date {
  const { years = 1, refDate = getDefaultRefDate(fakerCore) } = options;

  if (years <= 0) {
    throw new FakerError('Years must be greater than 0.');
  }

  const time = toDate(refDate).getTime();

  return between(fakerCore, {
    from: time + 1000,
    to: time + years * 365 * 24 * 3600 * 1000,
  });
}
