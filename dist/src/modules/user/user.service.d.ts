import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly _userRepo;
    constructor(_userRepo: Repository<User>);
    create(dto: CreateUserDto): Promise<User>;
    paginate(filter: FilterUserDto): Promise<import("nestjs-typeorm-paginate").Pagination<User, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findUserByRecoveryToken(recoveryToken: string): Promise<User>;
    updatePartialUser(id: string, partialUser: Partial<User>): Promise<void>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
