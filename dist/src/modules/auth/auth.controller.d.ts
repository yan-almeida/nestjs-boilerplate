import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthedDto } from './dto/authed.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    create(dto: LoginAuthDto): Promise<AuthedDto>;
    getProfile(req: Request): Express.User;
}
