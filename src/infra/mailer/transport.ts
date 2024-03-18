import settings from '@infra/settings'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: settings.mailer.host,
  port: Number(settings.mailer.port),
  secure: false,
  auth: {
    user: settings.mailer.username,
    pass: settings.mailer.password
  }
})

export default transport
