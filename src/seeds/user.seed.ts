import { AppRoles } from 'src/app.roles';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../modules/user/entities/user.entity';

export default class CreateUsers implements Seeder {
  async run(factory: Factory, connection: Connection) {
    const adminUser = connection.manager.create(User, {
      fullName: 'Admin da Silva',
      email: 'admin@admin.com',
      role: AppRoles.ADMIN,
      password: '@Admin123',
    });

    await connection.manager.save(adminUser);
  }
}
