import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { boolean } from '../datatype/boolean';
import { arrayElement } from '../helpers/array-element';
import { fake } from '../helpers/fake';

/**
 * Generates a random dish name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * dish(fakerCore) // 'Tagine-Rubbed Venison Salad'
 *
 * @since 9.0.0
 */
export function dish(fakerCore: FakerCore): string {
  // A 50/50 mix of specific dishes and dish_patterns
  if (boolean(fakerCore)) {
    return toTitleCase(
      fake(
        fakerCore,
        assertLocaleData(
          fakerCore.definitions.food?.dish_pattern,
          'food.dish_pattern'
        )
      )
    );
  }

  return toTitleCase(
    arrayElement(
      fakerCore,
      assertLocaleData(fakerCore.definitions.food?.dish, 'food.dish')
    )
  );
}
