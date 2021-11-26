import { UniqueIdentifierEntity } from '../../../common/entities/unique-identifier.entity';
export declare class User extends UniqueIdentifierEntity {
    fullName: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    role: string;
    password: string;
    recoveryToken: string;
}
