import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { addDays } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { JwtPayloadBuilder } from '../../common/builders/jwt-payload.builder';
import { RecoveryPasswordDto } from '../auth/dto/recovery-password.dto';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { RecoveryPasswordConfirmDto } from './dtos/recovery-password-confirm.dto';
import { PasswordProxy } from './proxies/password.proxy';

@Injectable()
export class PasswordService {
  private static AMOUNT_ADD_DAY = 1;

  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
    private readonly _mailerService: MailerService,
  ) {}

  async recoveryPassword(dto: RecoveryPasswordDto) {
    const user = await this._userService.findOneByEmail(dto.email);
    if (!user) {
      return;
    }

    const recoveryToken = await this.#generateRecoveryToken(user);

    const generateUrlToRecoveryToken =
      this.#generateUrlToRecoveryToken(recoveryToken);

    await this._mailerService.sendMail({
      to: dto.email,
      subject: '-- - Esqueci minha senha',
      template: __dirname + '../../templates/recovery-password.hbs',
      context: {
        user: user.fullName,
        generateUrlToRecoveryToken,
      },
    });
  }
  async recoveryPasswordConfirm(dto: RecoveryPasswordConfirmDto) {
    const user = await this._userService.findUserByRecoveryToken(
      dto.recoveryToken,
    );

    const recoveryToken = this.#decodeHashedTokenToConfirmRecovery(
      dto.recoveryToken,
    );
    const userRecoveryToken = this.#decodeHashedTokenToConfirmRecovery(
      user.recoveryToken,
    );

    new PasswordProxy(recoveryToken, userRecoveryToken)
      .validateIfRecoveryTokenExpired()
      .validateIfExpirationDateIsEquals()
      .validateIfGUIDIsEquals();

    const password = await BcryptService.hash(dto.newPassword);

    await this._userService.updatePartialUser(user.id, {
      password,
      recoveryToken: null,
    });
  }
  resetPassword() {
    // TODO: reset de senha

    return;
  }
  #generateUrlToRecoveryToken(recoveryToken: string) {
    return `${this._configService.get(
      'app.urls.web',
    )}/resetar-senha?recoveryToken=${recoveryToken}`;
  }
  async #generateRecoveryToken(user: User) {
    const expirationDate = addDays(new Date(), PasswordService.AMOUNT_ADD_DAY);

    const hashedRecoveryToken = this.#generateHashedTokenToRecovery(
      user,
      uuid(),
      expirationDate,
    );

    await this._userService.updatePartialUser(user.id, {
      recoveryToken: hashedRecoveryToken,
    });

    return hashedRecoveryToken;
  }
  #generateHashedTokenToRecovery(
    user: User,
    GUID: string,
    expirationDate: Date,
  ) {
    const payload = JwtPayloadBuilder.toRecoveryToken(
      user,
      GUID,
      expirationDate,
    );

    return this._jwtService.sign(payload);
  }

  #decodeHashedTokenToConfirmRecovery(recoveryToken: string) {
    const decodedToken = this._jwtService.decode(
      recoveryToken,
    ) as Express.Recovery;

    if (!decodedToken) {
      throw new UnprocessableEntityException();
    }

    return decodedToken;
  }
}
