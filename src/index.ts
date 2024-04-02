import { DomainEventName } from '@infra/domain_events'
import logger from '@infra/logger'
import { mailerPasswordKey, mailerUsernameKey } from '@infra/settings'
import { onMessagePublished } from 'firebase-functions/v2/pubsub'

export const notifyOrderCreatedFunction = onMessagePublished(
  {
    topic: DomainEventName.ORDER_CREATED,
    secrets: [mailerUsernameKey, mailerPasswordKey],
    region: 'southamerica-east1',
    concurrency: 1,
    maxInstances: 10
  },
  async event => {
    logger.info(`Receiving incoming ${DomainEventName.ORDER_CREATED} Domain Event`, event)
    const promise = new Promise(resolve => {
      setTimeout(() => resolve(true), 1000)
    })
    await promise
    // await orderCreatedConsumer(event.data)
  }
)
