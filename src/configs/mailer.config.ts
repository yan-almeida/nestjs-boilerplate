import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('mailer', (): MailerOptions => {
  return {
    transport: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      ignoreTLS: true,
      secure: false,
      auth: {
        user: process.env.MAILDEV_INCOMING_USER || 'fcd6797c1e2719',
        pass: process.env.MAILDEV_INCOMING_PASS || '06e0020021f726',
      },
    },
    defaults: {
      from: '"No Reply" <no-reply@localhost>',
    },
    preview: true,
    template: {
      dir: join(__dirname, '../templates/'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  };
});
