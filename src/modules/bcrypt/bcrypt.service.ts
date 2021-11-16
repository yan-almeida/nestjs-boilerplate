import { genSaltSync, hash, hashSync } from 'bcrypt';

export class BcryptService {
  private static SALT_ROUNDS = 10;

  /**
   * @param data The data to be encrypted.
   * @param customSaltOrRounds The salt to be used in encryption. If specified as a number then a
   * salt will be generated with the specified number of rounds and used - `default is 10`.
   * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
   */
  static hash(data: string, customSaltOrRounds?: number) {
    return hash(data, BcryptService.#genSalts(customSaltOrRounds));
  }
  /**
   *
   * @param data The data to be encrypted.
   * @param saltOrRounds The salt to be used to hash the password. If specified as a number then a
   * salt will be generated with the specified number of rounds and used  - `default is 10`.
   */
  static hashSync(data: string, customSaltOrRounds?: number) {
    return hashSync(data, BcryptService.#genSalts(customSaltOrRounds));
  }
  static #genSalts(customSaltOrRounds?: number) {
    return genSaltSync(customSaltOrRounds ?? BcryptService.SALT_ROUNDS);
  }
}
