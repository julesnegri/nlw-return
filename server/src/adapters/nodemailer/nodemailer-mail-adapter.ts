import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

// const transport = nodemailer.createTransport({
//   host: 'smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: '9955de172fc7f2',
//     pass: '2bf06a7c80ed15',
//   },
// });

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e6b8f0aa202a34",
    pass: "c2252f5a1d648e"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Jules n <jules.n@rocketseat.team>',
    subject,
    html: body,
  });
  }
}
