import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
export declare class UserMock {
    static validUser(): User;
    static updateUserWithoutPassword(): UpdateUserDto;
}
