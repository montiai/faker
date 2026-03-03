import { FakerError } from '../../errors/faker-error';
import type { FakerCore } from '../../faker-core';
import { toDate } from '../../internal/date';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { between } from '../date/between';

/**
 * Generates a random date in the near future.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.days The range of days the date may be in the future. Defaults to `1`.
 * @param options.refDate The date to use as reference point for the newly generated date. Defaults to `getDefaultRefDate(fakerCore)`.
 *
 * @see future(fakerCore): For generating dates further in the future (years instead of days).
 *
 * @example
 * soon(fakerCore) // '2022-02-05T09:55:39.216Z'
 * soon(fakerCore, { days: 10 }) // '2022-02-11T05:14:39.138Z'
 * soon(fakerCore, { days: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-01-01T02:40:44.990Z'
 *
 * @since 8.0.0
 */
export function soon(
  fakerCore: FakerCore,
  options: {
    /**
     * The range of days the date may be in the future.
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
    from: time + 1000,
    to: time + days * 24 * 3600 * 1000,
  });
}
