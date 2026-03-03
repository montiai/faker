/**
 * Central location for all configuration options of Faker.
 *
 * When accessing any of the configuration options, always assume that the option may be unset and provide a default value.
 */
export interface FakerConfig {
  /**
   * Provides the default reference date, mainly used for relative dates.
   *
   * @since 10.4.0
   */
  defaultRefDate?: () => Date;
}
