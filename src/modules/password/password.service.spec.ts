import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';

const UserServiceMocked = {
  findOneByEmail: jest.fn(),
};

describe('PasswordService', () => {
  let passwordService: PasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'super_secret',
          signOptions: {
            expiresIn: '10 days',
          },
        }),
      ],
      providers: [
        PasswordService,
        UserService,
        ConfigService,
        MailerService,
        {
          name: 'MAILER_OPTIONS',
          provide: 'MAILER_OPTIONS',
          useValue: {
            transport: {
              host: 'smtp.mailtrap.io',
              port: 2525,
              ignoreTLS: true,
              secure: false,
              auth: {
                user: 'fcd6797c1e2719',
                pass: '06e0020021f726',
              },
            },
          },
        },
        {
          provide: UserService,
          useValue: UserServiceMocked,
        },
      ],
    }).compile();

    passwordService = module.get(PasswordService);
  });

  it('should be defined', () => {
    expect(passwordService).toBeDefined();
  });
});
