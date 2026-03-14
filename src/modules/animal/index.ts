import { fakerToCore } from '../../internal/faker-to-core';
import { ModuleBase } from '../../internal/module-base';
import { bear as animalBear } from './bear';
import { bird as animalBird } from './bird';
import { cat as animalCat } from './cat';
import { cetacean as animalCetacean } from './cetacean';
import { cow as animalCow } from './cow';
import { crocodilia as animalCrocodilia } from './crocodilia';
import { dog as animalDog } from './dog';
import { fish as animalFish } from './fish';
import { horse as animalHorse } from './horse';
import { insect as animalInsect } from './insect';
import { lion as animalLion } from './lion';
import { petName as animalPetName } from './pet-name';
import { rabbit as animalRabbit } from './rabbit';
import { rodent as animalRodent } from './rodent';
import { snake as animalSnake } from './snake';
import { type as animalType } from './type';

/**
 * Module to generate animal related entries.
 *
 * ### Overview
 *
 * For a general type of animal (e.g. `'dog'`), use [`type()`](https://fakerjs.dev/api/animal.html#type).
 *
 * Otherwise, use one of the more specific methods, such as [`cat()`](https://fakerjs.dev/api/animal.html#cat) for a specific breed of cat.
 *
 * All values may be localized.
 */
export class AnimalModule extends ModuleBase {
  /**
   * Returns a random dog breed.
   *
   * @example
   * faker.animal.dog() // 'Irish Water Spaniel'
   *
   * @since 5.5.0
   */
  dog(): string {
    return animalDog(fakerToCore(this.faker));
  }

  /**
   * Returns a random cat breed.
   *
   * @example
   * faker.animal.cat() // 'Singapura'
   *
   * @since 5.5.0
   */
  cat(): string {
    return animalCat(fakerToCore(this.faker));
  }

  /**
   * Returns a random snake species.
   *
   * @example
   * faker.animal.snake() // 'Eyelash viper'
   *
   * @since 5.5.0
   */
  snake(): string {
    return animalSnake(fakerToCore(this.faker));
  }

  /**
   * Returns a random bear species.
   *
   * @example
   * faker.animal.bear() // 'Asian black bear'
   *
   * @since 5.5.0
   */
  bear(): string {
    return animalBear(fakerToCore(this.faker));
  }

  /**
   * Returns a random lion species.
   *
   * @example
   * faker.animal.lion() // 'Northeast Congo Lion'
   *
   * @since 5.5.0
   */
  lion(): string {
    return animalLion(fakerToCore(this.faker));
  }

  /**
   * Returns a random cetacean species.
   *
   * @example
   * faker.animal.cetacean() // 'Spinner Dolphin'
   *
   * @since 5.5.0
   */
  cetacean(): string {
    return animalCetacean(fakerToCore(this.faker));
  }

  /**
   * Returns a random horse breed.
   *
   * @example
   * faker.animal.horse() // 'Swedish Warmblood'
   *
   * @since 5.5.0
   */
  horse(): string {
    return animalHorse(fakerToCore(this.faker));
  }

  /**
   * Returns a random bird species.
   *
   * @example
   * faker.animal.bird() // 'Buller's Shearwater'
   *
   * @since 5.5.0
   */
  bird(): string {
    return animalBird(fakerToCore(this.faker));
  }

  /**
   * Returns a random cow species.
   *
   * @example
   * faker.animal.cow() // 'Brava'
   *
   * @since 5.5.0
   */
  cow(): string {
    return animalCow(fakerToCore(this.faker));
  }

  /**
   * Returns a random fish species.
   *
   * @example
   * faker.animal.fish() // 'Mandarin fish'
   *
   * @since 5.5.0
   */
  fish(): string {
    return animalFish(fakerToCore(this.faker));
  }

  /**
   * Returns a random crocodilian species.
   *
   * @example
   * faker.animal.crocodilia() // 'Philippine Crocodile'
   *
   * @since 5.5.0
   */
  crocodilia(): string {
    return animalCrocodilia(fakerToCore(this.faker));
  }

  /**
   * Returns a random insect species.
   *
   * @example
   * faker.animal.insect() // 'Pyramid ant'
   *
   * @since 5.5.0
   */
  insect(): string {
    return animalInsect(fakerToCore(this.faker));
  }

  /**
   * Returns a random rabbit species.
   *
   * @example
   * faker.animal.rabbit() // 'Florida White'
   *
   * @since 5.5.0
   */
  rabbit(): string {
    return animalRabbit(fakerToCore(this.faker));
  }

  /**
   * Returns a random rodent breed.
   *
   * @example
   * faker.animal.rodent() // 'Cuscomys ashanika'
   *
   * @since 7.4.0
   */
  rodent(): string {
    return animalRodent(fakerToCore(this.faker));
  }

  /**
   * Returns a random animal type.
   *
   * @example
   * faker.animal.type() // 'crocodile'
   *
   * @since 5.5.0
   */
  type(): string {
    return animalType(fakerToCore(this.faker));
  }

  /**
   * Returns a random pet name.
   *
   * @example
   * faker.animal.petName() // 'Coco'
   *
   * @since 9.2.0
   */
  petName(): string {
    return animalPetName(fakerToCore(this.faker));
  }
}
