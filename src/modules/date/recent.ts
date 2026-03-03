import { FakerError } from '../../errors/faker-error';
import type { FakerCore } from '../../faker-core';
import { toDate } from '../../internal/date';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { between } from '../date/between';

/**
 * Generates a random date in the recent past.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.days The range of days the date may be in the past. Defaults to `1`.
 * @param options.refDate The date to use as reference point for the newly generated date. Defaults to `getDefaultRefDate(fakerCore)`.
 *
 * @see past(fakerCore): For generating dates further back in time (years instead of days).
 *
 * @example
 * recent(fakerCore) // '2022-02-04T02:09:35.077Z'
 * recent(fakerCore, { days: 10 }) // '2022-01-29T06:12:12.829Z'
 * recent(fakerCore, { days: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2019-12-27T18:11:19.117Z'
 *
 * @since 8.0.0
 */
export function recent(
  fakerCore: FakerCore,
  options: {
    /**
     * The range of days the date may be in the past.
     *
     * @default 1
     */
    days?: number;
    /**
     * The date to use as reference point for the newly generated date.
     *
     * @default getDefaultRefDate(fakerCore)
     */
    refDate?: string | Date | number;
  } = {}
): Date {
  const { days = 1, refDate = getDefaultRefDate(fakerCore) } = options;

  if (days <= 0) {
    throw new FakerError('Days must be greater than 0.');
  }

  const time = toDate(refDate).getTime();

  return between(fakerCore, {
    from: time - days * 24 * 3600 * 1000,
    to: time - 1000,
  });
}
