/**
 * Converts an array of numbers into binary string format.
 *
 * @param values Array of values to be converted.
 */
export function toBinary(values: number[]): string {
  const binary: string[] = values.map((value) => {
    const isFloat = value % 1 !== 0;
    if (isFloat) {
      const buffer = new ArrayBuffer(4);
      new DataView(buffer).setFloat32(0, value);
      const bytes = new Uint8Array(buffer);
      return toBinary([...bytes]).replaceAll(' ', '');
    }

    return (value >>> 0).toString(2).padStart(8, '0');
  });
  return binary.join(' ');
}
