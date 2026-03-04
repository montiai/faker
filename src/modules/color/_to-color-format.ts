import { toBinary } from './_to-binary';
import { toCSS } from './_to-css';
import type { ColorFormat } from './_types';
import type { CssFunctionType } from './css-supported-function';
import type { CssSpaceType } from './css-supported-space';

/**
 * Converts an array of color values to the specified color format.
 *
 * @param values Array of color values to be converted.
 * @param format Format of generated RGB color.
 * @param cssFunction CSS function to be generated for the color. Defaults to `'rgb'`.
 * @param space Color space to format CSS color function with. Defaults to `'sRGB'`.
 */
export function toColorFormat(
  values: number[],
  format: ColorFormat,
  cssFunction: CssFunctionType = 'rgb',
  space: CssSpaceType = 'sRGB'
): string | number[] {
  switch (format) {
    case 'css': {
      return toCSS(values, cssFunction, space);
    }

    case 'binary': {
      return toBinary(values);
    }

    case 'decimal': {
      return values;
    }
  }
}
