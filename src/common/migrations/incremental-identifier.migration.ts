import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class IncrementalIdentifierMigration {
  static columns(): TableColumnOptions[] {
    return [
      {
        name: 'id',
        type: 'number',
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
