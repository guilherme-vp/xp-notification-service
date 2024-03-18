import { DomainEventName } from '@infra/domain_events'
import logger from '@infra/logger'
import { mailerPasswordKey, mailerUsernameKey } from '@infra/settings'
import { onMessagePublished } from 'firebase-functions/v2/pubsub'
import orderCreatedConsumer from './entrypoints/order_created_consumer'

export const notifyOrderCreatedFunction = onMessagePublished(
  {
    topic: DomainEventName.ORDER_CREATED,
    secrets: [mailerUsernameKey, mailerPasswordKey],
    region: 'southamerica-east1'
  },
  async event => {
    logger.info(`Receiving incoming ${DomainEventName.ORDER_CREATED} Domain Event`, event)
    await orderCreatedConsumer(event.data)
  }
)
