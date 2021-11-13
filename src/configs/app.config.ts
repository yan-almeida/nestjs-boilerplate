import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    port: parseInt(process.env.PORT) || 3030,
    urls: {
      api: process.env.API_URL || 'http://localhost:3030',
      web: process.env.WEB_URL || 'http://localhost:3001',
    },
  };
});
