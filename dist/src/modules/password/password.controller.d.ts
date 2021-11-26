import { Request } from 'express';
import { RecoveryPasswordDto } from '../auth/dto/recovery-password.dto';
import { RecoveryPasswordConfirmDto } from './dtos/recovery-password-confirm.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { PasswordService } from './password.service';
export declare class PasswordController {
    private readonly _passwordService;
    constructor(_passwordService: PasswordService);
    recoveryPassword(dto: RecoveryPasswordDto): Promise<void>;
    recoveryPasswordConfirm(dto: RecoveryPasswordConfirmDto): Promise<void>;
    resetPassword(dto: ResetPasswordDto, req: Request): Promise<void>;
}
