import type { CssFunctionType } from './css-supported-function';
import type { CssSpaceType } from './css-supported-space';

/**
 * Converts the given value to a percentage (`round(value * 100)`).
 *
 * @param value The value to convert to a percentage.
 */
function toPercentage(value: number): number {
  return Math.round(value * 100);
}

/**
 * Converts an array of numbers into CSS accepted format.
 *
 * @param values Array of values to be converted.
 * @param cssFunction CSS function to be generated for the color. Defaults to `'rgb'`.
 * @param space Color space to format CSS color function with. Defaults to `'sRGB'`.
 */
export function toCSS(
  values: number[],
  cssFunction: CssFunctionType = 'rgb',
  space: CssSpaceType = 'sRGB'
): string {
  switch (cssFunction) {
    case 'rgba': {
      return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${values[3]})`;
    }

    case 'color': {
      return `color(${space} ${values[0]} ${values[1]} ${values[2]})`;
    }

    case 'cmyk': {
      return `cmyk(${toPercentage(values[0])}%, ${toPercentage(
        values[1]
      )}%, ${toPercentage(values[2])}%, ${toPercentage(values[3])}%)`;
    }

    case 'hsl': {
      return `hsl(${values[0]}deg ${toPercentage(values[1])}% ${toPercentage(
        values[2]
      )}%)`;
    }

    case 'hsla': {
      return `hsl(${values[0]}deg ${toPercentage(values[1])}% ${toPercentage(
        values[2]
      )}% / ${toPercentage(values[3])})`;
    }

    case 'hwb': {
      return `hwb(${values[0]} ${toPercentage(values[1])}% ${toPercentage(
        values[2]
      )}%)`;
    }

    case 'lab': {
      return `lab(${toPercentage(values[0])}% ${values[1]} ${values[2]})`;
    }

    case 'lch': {
      return `lch(${toPercentage(values[0])}% ${values[1]} ${values[2]})`;
    }

    case 'rgb': {
      return `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
    }
  }
}
