export function getEnv(name: string, defaultValue?: string): string {
  const value = process.env[name] ?? defaultValue
  if (value == null) {
    throw new Error(`Missing env ${name}`)
  }
  return value
}
