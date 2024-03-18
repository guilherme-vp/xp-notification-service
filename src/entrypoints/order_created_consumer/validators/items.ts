import { z } from 'zod'

export const OrderItemDataSchema = z.object({
  id: z.string(),
  quantity: z.number()
})
