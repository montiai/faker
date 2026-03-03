import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database engine.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * engine(fakerCore) // 'ARCHIVE'
 *
 * @since 4.0.0
 */
export function engine(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.definitions.database?.engine, 'database.engine')
  );
}
