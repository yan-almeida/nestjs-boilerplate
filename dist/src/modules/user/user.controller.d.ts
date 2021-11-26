import { PaginatedDto } from '../../common/dtos/paginated.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    create(dto: CreateUserDto): Promise<UserDto>;
    paginate(filter: FilterUserDto): Promise<PaginatedDto<UserDto>>;
    findOne(id: string): Promise<UserDto>;
    update(id: string, dto: UpdateUserDto): Promise<UserDto>;
    remove(id: string): Promise<void>;
}
