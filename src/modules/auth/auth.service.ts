import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { JwtPayloadBuilder } from '../../common/builders/jwt-payload.builder';
import { ITokenUser } from '../../common/interfaces/token-user.interface';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
  ) {}

  async loginUser(email: string, password: string): Promise<ITokenUser> {
    const user = await this._userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    await this.#validateUserPassword(password, user.password);

    const token = this.#generateToken(user);

    return {
      user,
      token,
    };
  }
  async #validateUserPassword(plainPass: string, hashedPass: string) {
    const user = compareSync(plainPass, hashedPass);

    if (!user) {
      throw new UnauthorizedException();
    }
  }
  #generateToken(user: User) {
    const payload = JwtPayloadBuilder.toUserLogin(user);

    return this._jwtService.sign(payload);
  }
}
