import logger from '@infra/logger'
import settings from '@infra/settings'
import nodemailer from 'nodemailer'

export interface MailerSendEmailBody {
  recipientEmailAddress: string
  subject: string
  content: string
}

export async function sendMail(postBody: MailerSendEmailBody): Promise<boolean> {
  const transport = nodemailer.createTransport({
    host: settings.mailer.host,
    port: Number(settings.mailer.port),
    secure: false,
    auth: {
      user: settings.mailer.username.value(),
      pass: settings.mailer.password.value()
    }
  })

  try {
    logger.info(`Enviando e-mail transacional para ${postBody.recipientEmailAddress}`, { postBody })
    await transport.sendMail({
      from: `<${settings.mailer.sender}>`,
      to: postBody.recipientEmailAddress,
      subject: postBody.subject,
      html: postBody.content
    })
    return true
  } catch (error) {
    logger.error('O envio do email falhou', { error, postBody })
    return false
  }
}
