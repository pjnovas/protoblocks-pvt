import { createTransport } from 'nodemailer';
import { mailer } from '../../../config.json';

const transport = createTransport(mailer.transport);

const sendEmail = (data, done) => {
  const now = new Date();

  const mailOpts = {
    from: mailer.emails.from || data.email,
    to: mailer.emails.to,
    subject: 'Contacto - ProtoBlocks',
    text: `${now}\n\n${data.name} <${data.email}>\n\n${data.text}`,
    html: `${now}<br /><hr />${data.name} &lt;${data.email}&gt;<br /><hr />${data.text.replace(/\n\r?/g, '<br />')}`
  };

  transport.sendMail(mailOpts, done);
};

export default function send(req) {
  return new Promise((resolve, reject) => {
    sendEmail(req.body, err => {
      if (err) {
        const e = new Error('Could not send form');
        e.code = 'not_sended_server_error';
        console.dir(err); // TODO: Improve logs
        return reject(e);
      }

      resolve();
    });
  });
}
