import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnRecoveryTokenInUserTable1636597178841
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tb_user',
      new TableColumn({
        name: 'recovery_token',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tb_user', 'recovery_token');
  }
}
