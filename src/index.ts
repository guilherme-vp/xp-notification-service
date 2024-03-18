import { DomainEventName } from '@infra/domain_events'
import logger from '@infra/logger'
import { SECRETS } from '@infra/settings'
import { onMessagePublished } from 'firebase-functions/v2/pubsub'
import orderCreatedConsumer from './entrypoints/order_created_consumer'

export const notifyOrderCreatedFunction = onMessagePublished(
  {
    topic: DomainEventName.ORDER_CREATED,
    secrets: [SECRETS.MAILER_PASSWORD, SECRETS.MAILER_USERNAME],
    retry: true
  },
  async event => {
    logger.info(`Receiving incoming ${DomainEventName.ORDER_CREATED} Domain Event`, event)
    await orderCreatedConsumer(event.data)
  }
)
