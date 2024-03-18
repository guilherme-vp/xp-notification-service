import logger from '@infra/logger'
import settings from '@infra/settings'
import mailTransport from './transport'

export interface MailerSendEmailBody {
  recipientEmailAddress: string
  subject: string
  content: string
}

export async function sendMail(postBody: MailerSendEmailBody): Promise<boolean> {
  try {
    logger.info(`Enviando e-mail transacional para ${postBody.recipientEmailAddress}`, { postBody })
    await mailTransport.sendMail({
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
