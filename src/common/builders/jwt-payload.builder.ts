import { User } from '../../modules/user/entities/user.entity';

export class JwtPayloadBuilder {
  static toUserLogin(user: User): Express.User {
    return {
      userId: user.id,
      user: user.fullName,
      role: user.role,
    };
  }

  static toRecoveryToken(
    user: User,
    GUID: string,
    expirationDate: Date,
  ): Express.Recovery {
    return {
      GUID,
      expirationDate,
      user: JwtPayloadBuilder.toUserLogin(user),
    };
  }
}
