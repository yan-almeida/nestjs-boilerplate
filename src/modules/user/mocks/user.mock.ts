import { v4 } from 'uuid';
import { AppRoles } from '../../../app.roles';
import { BcryptService } from '../../bcrypt/bcrypt.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Faker = require('faker-br');

export class UserMock {
  static validUser() {
    return {
      id: v4(),
      fullName: Faker.name.findName(),
      email: Faker.internet.email(),
      phoneNumber: Faker.phone.phoneNumber(),
      address: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
      role: AppRoles.USER,
      password: BcryptService.hashSync('password'),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
  }

  static updateUserWithoutPassword(): UpdateUserDto {
    return {
      fullName: Faker.name.findName(),
      email: Faker.internet.email(),
      phoneNumber: Faker.phone.phoneNumber(),
      address: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
    };
  }
}
