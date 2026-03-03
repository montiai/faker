import { FakerError } from '../../errors/faker-error';
import type { FakerCore } from '../../faker-core';
import { toDate } from '../../internal/date';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { between } from '../date/between';

/**
 * Generates a random date in the past.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.years The range of years the date may be in the past. Defaults to `1`.
 * @param options.refDate The date to use as reference point for the newly generated date. Defaults to `getDefaultRefDate(fakerCore)`.
 *
 * @see recent(fakerCore): For generating dates in the recent past (days instead of years).
 *
 * @example
 * past(fakerCore) // '2021-12-03T05:40:44.408Z'
 * past(fakerCore, { years: 10 }) // '2017-10-25T21:34:19.488Z'
 * past(fakerCore, { years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2017-08-18T02:59:12.350Z'
 *
 * @since 8.0.0
 */
export function past(
  fakerCore: FakerCore,
  options: {
    /**
     * The range of years the date may be in the past.
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
    from: time - years * 365 * 24 * 3600 * 1000,
    to: time - 1000,
  });
}
