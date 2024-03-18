import { getEnv } from '@utils/get_env'
import { config } from 'dotenv'

config()

export enum SECRETS {
  MAILER_USERNAME = 'MAILER_USERNAME',
  MAILER_PASSWORD = 'MAILER_PASSWORD'
}

const settings = {
  name: process.env.APP_NAME || 'notification-service',
  mailer: {
    username: getEnv(SECRETS.MAILER_USERNAME),
    password: getEnv(SECRETS.MAILER_PASSWORD),
    host: getEnv('MAILER_HOST', 'sandbox.smtp.mailtrap.io'),
    port: getEnv('MAILER_PORT', '2525'),
    sender: getEnv('MAILER_SENDER', 'xp-educacao@gmail.com')
  }
}

export default settings
