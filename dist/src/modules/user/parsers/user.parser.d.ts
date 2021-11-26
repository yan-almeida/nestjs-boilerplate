import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
export declare class UserParser {
    static toUserDto(entity: User): UserDto;
}
