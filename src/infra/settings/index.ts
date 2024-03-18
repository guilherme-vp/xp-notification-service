import { getEnv } from '@utils/get_env'
import { defineSecret } from 'firebase-functions/params'

enum SECRETS {
  MAILER_USERNAME = 'MAILER_USERNAME',
  MAILER_PASSWORD = 'MAILER_PASSWORD'
}

export const mailerUsernameKey = defineSecret(SECRETS.MAILER_USERNAME)
export const mailerPasswordKey = defineSecret(SECRETS.MAILER_PASSWORD)

const settings = {
  name: process.env.APP_NAME || 'notification-service',
  mailer: {
    username: mailerUsernameKey,
    password: mailerPasswordKey,
    host: getEnv('MAILER_HOST', 'sandbox.smtp.mailtrap.io'),
    port: getEnv('MAILER_PORT', '2525'),
    sender: getEnv('MAILER_SENDER', 'xp-educacao@gmail.com')
  }
}

export default settings
