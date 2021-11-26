import { User } from '../../modules/user/entities/user.entity';
export declare class JwtPayloadBuilder {
    static toUserLogin(user: User): Express.User;
    static toRecoveryToken(user: User, GUID: string, expirationDate: Date): Express.Recovery;
}
