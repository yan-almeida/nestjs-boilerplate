import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs('jwt', (): JwtModuleOptions => {
  return {
    secret: process.env.JWT_SECRET || 'fake_secret_bf0f3cf36e',
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN || '10 days',
    },
  };
});
