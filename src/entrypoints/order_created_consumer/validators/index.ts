import { z } from 'zod'

import { OrderItemDataSchema } from './items'

export const OrderCreatedDataSchema = z.object({
  user: z.object({
    email: z.string().email(),
    name: z.string()
  }),
  items: z.array(OrderItemDataSchema)
})

export type OrderCreatedEventPayload = z.infer<typeof OrderCreatedDataSchema>
