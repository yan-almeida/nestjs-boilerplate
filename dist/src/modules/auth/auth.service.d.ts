import { JwtService } from '@nestjs/jwt';
import { ITokenUser } from '../../common/interfaces/token-user.interface';
import { UserService } from '../user/user.service';
export declare class AuthService {
    #private;
    private readonly _userService;
    private readonly _jwtService;
    constructor(_userService: UserService, _jwtService: JwtService);
    loginUser(email: string, password: string): Promise<ITokenUser>;
}
