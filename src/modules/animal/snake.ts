import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random snake species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * snake(fakerCore) // 'Eyelash viper'
 *
 * @since 5.5.0
 */
export function snake(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.animal?.snake, 'animal.snake')
  );
}
