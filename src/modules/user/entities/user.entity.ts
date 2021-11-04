import { genSaltSync, hashSync } from 'bcrypt';
import { BeforeInsert, Entity } from 'typeorm';
import { AppRoles } from '../../../app.roles';
import { UniqueIdentifierEntity } from '../../../common/entities/unique-identifier.entity';
import { EncryptedColumn } from '../../../decorators/encrypted-column.decorator';
import { NormalizedColumn } from '../../../decorators/normalized-column.decorator';

@Entity()
export class User extends UniqueIdentifierEntity {
  @EncryptedColumn()
  fullName: string;

  @EncryptedColumn()
  email: string;

  @EncryptedColumn()
  phoneNumber?: string;

  @NormalizedColumn()
  address?: string;

  @NormalizedColumn({
    default: AppRoles.USER,
    length: 40,
  })
  role: string;

  @NormalizedColumn()
  password: string;

  @BeforeInsert()
  private generateHashedPassword() {
    if (this.password) {
      this.password = hashSync(this.password, genSaltSync());
    }
  }
}
