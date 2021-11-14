import { MailerModule } from '@nestjs-modules/mailer';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { default as AppConfig } from './configs/app.config';
import { default as JwtConfig } from './configs/jwt.config';
import { default as MailerConfig } from './configs/mailer.config';
import { default as TypeormConfig } from './configs/orm.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { PasswordModule } from './modules/password/password.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [JwtConfig, AppConfig, MailerConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot(TypeormConfig),
    MailerModule.forRootAsync({
      imports: [ConfigService],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('mailer'),
    }),
    AuthModule,
    PasswordModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
