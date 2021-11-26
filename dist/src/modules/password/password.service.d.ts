import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RecoveryPasswordDto } from '../auth/dto/recovery-password.dto';
import { UserService } from '../user/user.service';
import { RecoveryPasswordConfirmDto } from './dtos/recovery-password-confirm.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
export declare class PasswordService {
    #private;
    private readonly _userService;
    private readonly _jwtService;
    private readonly _configService;
    private readonly _mailerService;
    private static AMOUNT_ADD_DAY;
    constructor(_userService: UserService, _jwtService: JwtService, _configService: ConfigService, _mailerService: MailerService);
    recoveryPassword(dto: RecoveryPasswordDto): Promise<void>;
    recoveryPasswordConfirm(dto: RecoveryPasswordConfirmDto): Promise<void>;
    resetPassword(userId: string, dto: ResetPasswordDto): Promise<void>;
}
