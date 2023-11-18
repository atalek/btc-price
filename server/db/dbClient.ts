import { createClient } from '@libsql/client'

export const client = createClient({
  url: process.env.TURSO_DB_URL as string,
  authToken: process.env.TURSO_AUTHTOKEN,
})
