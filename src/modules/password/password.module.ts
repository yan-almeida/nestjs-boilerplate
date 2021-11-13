import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('jwt'),
    }),
  ],
  controllers: [PasswordController],
  providers: [PasswordService],
  exports: [PasswordService],
})
export class PasswordModule {}
