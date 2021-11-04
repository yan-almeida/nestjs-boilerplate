import { ConfigService } from '@nestjs/config';

export class AppConfigService {
  constructor(private _configService: ConfigService) {}

  get dabataseHost() {
    console.log(
      this._configService.get<string>('database.host'),
      'this._configService.get<string>',
    );

    return this._configService.get<string>('database.host');
  }
}
