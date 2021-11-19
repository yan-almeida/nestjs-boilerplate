import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default {
  type: 'postgres',
  host: process.env.DB_HOST || 'tuffi.db.elephantsql.com',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'zgxpwzyc',
  password: process.env.DB_PASSWORD || 'ShTXC_ozcNyXceKeLndBtSWZvOpsUy4r',
  database: process.env.DB_DATABASE || 'zgxpwzyc',
  entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
  autoLoadEntities: true,
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  logging: true,
  logger: 'advanced-console',
  entityPrefix: 'tb_',
  migrations: [
    join(__dirname, process.env.DB_MIGRATIONS || '../migrations/*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: process.env.DB_ENTITIES_DIR || './src/migrations',
  },
  seeds: [join(__dirname, process.env.DB_SEEDS || '../seeds/*.seed.{.ts,.js}')],
} as TypeOrmModuleOptions;
