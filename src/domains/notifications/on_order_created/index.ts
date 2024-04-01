import logger from '@infra/logger'
import * as mailerService from '@infra/mailer'

export interface OrderCreatedArgs {
  user: {
    name: string
    email: string
  }
  items: Array<{
    id: string
    quantity: number
  }>
}

const onOrderCreated = async (event: OrderCreatedArgs): Promise<void> => {
  const { user } = event
  const namedEmail = `${user.name} <${user.email}>`

  logger.info('Enviando notificação de Criação de Pedido', event)
  await mailerService.sendMail({
    recipientEmailAddress: namedEmail,
    subject: 'Pedido Criado com sucesso',
    content: `Olá ${user.name}, seu pedido foi registrado com sucesso!`
  })
  logger.info('Notificação de Criação de Pedido enviado')
}

export default onOrderCreated
