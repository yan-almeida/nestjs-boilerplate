import { UnauthorizedException } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { ITokenUser } from '../../common/interfaces/token-user.interface';
import { UserMock } from '../user/mocks/user.mock';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

const UserServiceMocked = {
  findOneByEmail: jest.fn(),
};

describe('AuthService', () => {
  let authService: AuthService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET || 'super_secret',
          signOptions: { expiresIn: '10 days' },
        }),
      ],
      providers: [
        AuthService,
        JwtStrategy,
        UserService,
        {
          provide: UserService,
          useValue: UserServiceMocked,
        },
      ],
    }).compile();

    authService = module.get(AuthService);
  });

  beforeEach(() => {
    UserServiceMocked.findOneByEmail.mockReset();
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    it('Deve retornar um usuário válido com o seu token de acesso ao passarmos email e senha corretos', async () => {
      const user = UserMock.validUser();

      UserServiceMocked.findOneByEmail.mockResolvedValue(user);

      const validateUser: ITokenUser = { user, token: expect.any(String) };

      expect(await authService.loginUser(user.email, 'password')).toMatchObject(
        validateUser,
      );
      expect(UserServiceMocked.findOneByEmail).toHaveBeenCalledTimes(1);
    });

    it('deve retornar uma exceção ao passarmos email e/ou senha incorretos', async () => {
      const user = UserMock.validUser();

      UserServiceMocked.findOneByEmail.mockResolvedValue(user);

      await authService
        .loginUser(user.email, 'invalid_password')
        .catch((e) => expect(e).toEqual(new UnauthorizedException()));

      expect(UserServiceMocked.findOneByEmail).toHaveBeenCalledTimes(1);
    });
  });
});
