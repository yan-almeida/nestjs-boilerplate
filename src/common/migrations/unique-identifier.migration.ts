import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class UniqueIdentifierMigration {
  static columns(): TableColumnOptions[] {
    return [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
    ];
  }
}
