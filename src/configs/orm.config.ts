import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_DATABASE || 'postgres',
    entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
    autoLoadEntities: true,
    synchronize: false,
    dropSchema: false,
    migrationsRun: false,
    logging: true,
    logger: 'advanced-console',
    entityPrefix: 'tb_',
    migrations: [
      join(__dirname, process.env.DB_MIGRATIONS || 'dist/migrations/**/*.js'),
    ],
    cli: {
      migrationsDir: process.env.DB_ENTITIES_DIR || './src/migrations',
    },
    seeds: [process.env.DB_SEEDS || 'dist/**/*.seed.js'],
  } as TypeOrmModuleOptions;
});
