import { User } from '../../user/entities/user.entity';
import { AuthedDto } from '../dto/authed.dto';
export declare class AuthParser {
    static toAuthedDto(user: User, token: string): AuthedDto;
}
