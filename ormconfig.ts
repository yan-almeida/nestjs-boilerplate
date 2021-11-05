import { ConfigModule } from '@nestjs/config';
import { default as dbConfiguration } from './src/configs/orm.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfiguration],
});

export default dbConfiguration();
