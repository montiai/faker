import type { FakerCore } from '../../faker-core';
import { arrayElement } from '../helpers/array-element';
import { fakeEval } from './_eval';

/**
 * Generator for combining faker methods based on a static string input.
 *
 * Note: We recommend using string template literals instead of `fake()`,
 * which are faster and strongly typed (if you are using TypeScript),
 * e.g. ``const address = `${locationZipCode(fakerCore)} ${locationCity(fakerCore)}`;``
 *
 * This method is useful if you have to build a random string from a static, non-executable source
 * (e.g. string coming from a user, stored in a database or a file).
 *
 * It checks the given string for placeholders and replaces them by calling faker methods:
 *
 * ```js
 * const hello = fake(fakerCore, 'Hi, my name is {{person.firstName}} {{person.lastName}}!');
 * ```
 *
 * This would use the `personFirstName(fakerCore)` and `personLastName(fakerCore)` method to resolve the placeholders respectively.
 *
 * It is also possible to provide parameters. At first, they will be parsed as json,
 * and if that isn't possible, we will fall back to string:
 *
 * ```js
 * const message = fake(fakerCore, 'You can call me at {{phone.number(+!# !## #### #####!)}}.');
 * ```
 *
 * It is also possible to use multiple parameters (comma separated).
 *
 * ```js
 * const message = fake(fakerCore, 'Your pin is {{string.numeric(4, {"allowLeadingZeros": true})}}.');
 * ```
 *
 * It is also NOT possible to use any non-faker methods or plain javascript in such patterns.
 *
 * @param fakerCore The FakerCore to use.
 * @param pattern The pattern string that will get interpolated.
 *
 * @see mustache(fakerCore): For using custom functions to resolve templates.
 *
 * @example
 * fake(fakerCore, '{{person.lastName}}') // 'Barrows'
 * fake(fakerCore, '{{person.lastName}}, {{person.firstName}} {{person.suffix}}') // 'Durgan, Noe MD'
 * fake(fakerCore, 'This is static test.') // 'This is static test.'
 * fake(fakerCore, 'Good Morning {{person.firstName}}!') // 'Good Morning Estelle!'
 * fake(fakerCore, 'You can visit me at {{location.streetAddress(true)}}.') // 'You can visit me at 3393 Ronny Way Apt. 742.'
 * fake(fakerCore, 'I flipped the coin and got: {{helpers.arrayElement(["heads", "tails"])}}') // 'I flipped the coin and got: tails'
 * fake(fakerCore, 'Your PIN number is: {{string.numeric(4, {"exclude": ["0"]})}}') // 'Your PIN number is: 4834'
 *
 * @since 7.4.0
 */
export function fake(fakerCore: FakerCore, pattern: string): string;
/**
 * Generator for combining faker methods based on an array containing static string inputs.
 *
 * Note: We recommend using string template literals instead of `fake()`,
 * which are faster and strongly typed (if you are using TypeScript),
 * e.g. ``const address = `${locationZipCode(fakerCore)} ${locationCity(fakerCore)}`;``
 *
 * This method is useful if you have to build a random string from a static, non-executable source
 * (e.g. string coming from a user, stored in a database or a file).
 *
 * It checks the given string for placeholders and replaces them by calling faker methods:
 *
 * ```js
 * const hello = fake(fakerCore, ['Hi, my name is {{person.firstName}} {{person.lastName}}!']);
 * ```
 *
 * This would use the `personFirstName(fakerCore)` and `personLastName(fakerCore)` method to resolve the placeholders respectively.
 *
 * It is also possible to provide parameters. At first, they will be parsed as json,
 * and if that isn't possible, it will fall back to string:
 *
 * ```js
 * const message = fake(fakerCore, [
 *   'You can call me at {{phone.number(+!# !## #### #####!)}}.',
 *   'My email is {{internet.email}}.',
 * ]);
 * ```
 *
 * It is also possible to use multiple parameters (comma separated).
 *
 * ```js
 * const message = fake(fakerCore, ['Your pin is {{string.numeric(4, {"allowLeadingZeros": true})}}.']);
 * ```
 *
 * It is also NOT possible to use any non-faker methods or plain javascript in such patterns.
 *
 * @param fakerCore The FakerCore to use.
 * @param patterns The array to select a pattern from, that will then get interpolated. Must not be empty.
 *
 * @see mustache(fakerCore): For using custom functions to resolve templates.
 *
 * @example
 * fake(fakerCore, ['A: {{person.firstName}}', 'B: {{person.lastName}}']) // 'A: Barry'
 *
 * @since 8.0.0
 */
export function fake(
  fakerCore: FakerCore,
  patterns: ReadonlyArray<string>
): string;
/**
 * Generator for combining faker methods based on a static string input or an array of static string inputs.
 *
 * Note: We recommend using string template literals instead of `fake()`,
 * which are faster and strongly typed (if you are using TypeScript),
 * e.g. ``const address = `${locationZipCode(fakerCore)} ${locationCity(fakerCore)}`;``
 *
 * This method is useful if you have to build a random string from a static, non-executable source
 * (e.g. string coming from a user, stored in a database or a file).
 *
 * It checks the given string for placeholders and replaces them by calling faker methods:
 *
 * ```js
 * const hello = fake(fakerCore, 'Hi, my name is {{person.firstName}} {{person.lastName}}!');
 * ```
 *
 * This would use the `personFirstName(fakerCore)` and `personLastName(fakerCore)` method to resolve the placeholders respectively.
 *
 * It is also possible to provide parameters. At first, they will be parsed as json,
 * and if that isn't possible, it will fall back to string:
 *
 * ```js
 * const message = fake(fakerCore, 'You can call me at {{phone.number(+!# !## #### #####!)}}.');
 * ```
 *
 * It is also possible to use multiple parameters (comma separated).
 *
 * ```js
 * const message = fake(fakerCore, 'Your pin is {{string.numeric(4, {"allowLeadingZeros": true})}}.');
 * ```
 *
 * It is also NOT possible to use any non-faker methods or plain javascript in such patterns.
 *
 * @param fakerCore The FakerCore to use.
 * @param pattern The pattern string that will get interpolated. If an array is passed, a random element will be picked and interpolated.
 *
 * @see mustache(fakerCore): For using custom functions to resolve templates.
 *
 * @example
 * fake(fakerCore, '{{person.lastName}}') // 'Barrows'
 * fake(fakerCore, '{{person.lastName}}, {{person.firstName}} {{person.suffix}}') // 'Durgan, Noe MD'
 * fake(fakerCore, 'This is static test.') // 'This is static test.'
 * fake(fakerCore, 'Good Morning {{person.firstName}}!') // 'Good Morning Estelle!'
 * fake(fakerCore, 'You can visit me at {{location.streetAddress(true)}}.') // 'You can visit me at 3393 Ronny Way Apt. 742.'
 * fake(fakerCore, 'I flipped the coin and got: {{helpers.arrayElement(["heads", "tails"])}}') // 'I flipped the coin and got: tails'
 * fake(fakerCore, ['A: {{person.firstName}}', 'B: {{person.lastName}}']) // 'A: Barry'
 *
 * @since 7.4.0
 */
export function fake(
  fakerCore: FakerCore,
  pattern: string | ReadonlyArray<string>
): string;

export function fake(
  fakerCore: FakerCore,
  pattern: string | ReadonlyArray<string>
): string {
  pattern =
    typeof pattern === 'string' ? pattern : arrayElement(fakerCore, pattern);

  // find first matching {{ and }}
  const start = pattern.search(/{{[a-z]/);
  const end = pattern.indexOf('}}', start);

  // if no {{ and }} is found, we are done
  if (start === -1 || end === -1) {
    return pattern;
  }

  // extract method name from between the {{ }} that we found
  // for example: {{person.firstName}}
  const token = pattern.substring(start + 2, end + 2);
  const method = token.replace('}}', '').replace('{{', '');

  const result = fakeEval(method, fakerCore);
  const stringified = String(result);

  // Replace the found tag with the returned fake value
  // We cannot use string.replace here because the result might contain evaluated characters
  const patched =
    pattern.substring(0, start) + stringified + pattern.substring(end + 2);

  // return the response recursively until we are done finding all tags
  return fake(fakerCore, patched);
}
