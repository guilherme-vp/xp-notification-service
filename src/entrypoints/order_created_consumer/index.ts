import type { MessagePublishedData } from 'firebase-functions/v2/pubsub'

import * as notificationsDomain from '@domains/notifications'
import logger from '@infra/logger'
import { validateSchema } from '@utils/validate_schema'
import { OrderCreatedDataSchema, type OrderCreatedEventPayload } from './validators'

const messageHandler = async (
  data: MessagePublishedData<OrderCreatedEventPayload>
): Promise<void> => {
  const validatedData = await validateSchema(OrderCreatedDataSchema, data.message.json)

  logger.info('Processing Order Created', validatedData)
  await notificationsDomain.onOrderCreated(validatedData)
}

export default messageHandler
