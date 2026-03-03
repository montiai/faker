import type { FakerCore } from '../../faker-core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random user agent string.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * userAgent(fakerCore)
 * // 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_1 like Mac OS X) AppleWebKit/537.19.86 (KHTML, like Gecko) Version/18_3 Mobile/15E148 Safari/598.43'
 *
 * @since 2.0.1
 */
export function userAgent(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.definitions.internet?.user_agent_pattern,
      'internet.user_agent_pattern'
    )
  );
}
