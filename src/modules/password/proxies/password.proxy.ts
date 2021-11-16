import { Logger, UnprocessableEntityException } from '@nestjs/common';
import { isEqual, isFuture } from 'date-fns';

export class PasswordProxy {
  private readonly _logger = new Logger('PasswordProxy');
  private readonly _recoveryToken: Express.Recovery;
  private readonly _userRecoveryToken: Express.Recovery;

  constructor(
    recoveryToken: Express.Recovery,
    userRecoveryToken: Express.Recovery,
  ) {
    this._recoveryToken = recoveryToken;
    this._userRecoveryToken = userRecoveryToken;
  }
  validateIfRecoveryTokenExpired() {
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
  validateIfGUIDIsEquals() {
    const isEquals = this._recoveryToken.GUID === this._userRecoveryToken.GUID;

    if (!isEquals) {
      this._logger.error('GUID não é identico');
      throw new UnprocessableEntityException(
        'Token de recuperação é inválido.',
      );
    }

    return this;
  }

  validateIfExpirationDateIsEquals() {
    const isEquals = isEqual(
      new Date(this._recoveryToken.expirationDate),
      new Date(this._userRecoveryToken.expirationDate),
    );

    if (!isEquals) {
      this._logger.error('Data de expiração não é identica');
      throw new UnprocessableEntityException(
        'Token de recuperação é inválido.',
      );
    }

    return this;
  }
}
