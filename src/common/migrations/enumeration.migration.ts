import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class EnumerationMigration {
  static columns(): TableColumnOptions[] {
    return [
      {
        name: 'id',
        type: 'number',
        isPrimary: true,
      },
      {
        name: 'description',
        type: 'varchar',
        length: '120',
      },
    ];
  }
}
