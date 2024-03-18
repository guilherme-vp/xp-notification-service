import logger from '@infra/logger'

export function getEnv(name: string, defaultValue?: string): string {
  const value = process.env[name] ?? defaultValue
  if (value == null) {
    logger.warn(`Env ${name} is missing, a few functionalities might not work as expected...`)
    return ''
  }
  return value
}
