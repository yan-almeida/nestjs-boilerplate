import { UnprocessableEntityException } from '@nestjs/common';
import { isEqual, isFuture } from 'date-fns';

export class PasswordProxy {
  private _recoveryToken: Express.Recovery;
  private _userRecoveryToken: Express.Recovery;

  constructor(
    recoveryToken: Express.Recovery,
    userRecoveryToken: Express.Recovery,
  ) {
    this._recoveryToken = recoveryToken;
    this._userRecoveryToken = userRecoveryToken;
  }

  validateRecoveryToken() {
    this.#validateIfRecoveryTokenExpired();
    this.#validateIfExpirationDateIsEquals();
    this.#validateIfGUIDIsEquals();

    return this._userRecoveryToken;
  }

  #validateIfRecoveryTokenExpired() {
    const isValidExpirationDate = isFuture(
      new Date(this._recoveryToken.expirationDate),
    );

    if (!isValidExpirationDate) {
      throw new UnprocessableEntityException(
        'Token de recuperação senha expirou.',
      );
    }

    return this;
  }
  #validateIfGUIDIsEquals() {
    const isEquals = this._recoveryToken.GUID === this._userRecoveryToken.GUID;

    if (!isEquals) {
      throw new UnprocessableEntityException(
        'Token de recuperação é inválido.',
      );
    }

    return this;
  }

  #validateIfExpirationDateIsEquals() {
    const isEquals = isEqual(
      new Date(this._recoveryToken.expirationDate),
      new Date(this._userRecoveryToken.expirationDate),
    );

    if (!isEquals) {
      throw new UnprocessableEntityException(
        'Token de recuperação é inválido.',
      );
    }

    return this;
  }
}
