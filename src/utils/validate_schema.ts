import logger from '@infra/logger'
import type { z } from 'zod'

export const createSchemaValidator =
  <T>(schema: z.Schema<T>) =>
  async (data: unknown): Promise<T> =>
    validateSchema(schema, data)

export async function validateSchema<T>(schema: z.Schema<T>, data: unknown): Promise<T> {
  try {
    return await schema.parseAsync(data)
  } catch (err) {
    logger.error('Evento inválido fornecido', err)
    throw err
  }
}
