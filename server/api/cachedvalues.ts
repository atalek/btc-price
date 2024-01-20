import { desc } from 'drizzle-orm'
import { db } from '~/server/utils/db'

export default defineEventHandler(async () => {
  try {
    const cachedResults = await db()
      .select()
      .from(tables.cachedPrices)
      .orderBy(desc(tables.cachedPrices.btc))

    const transformedResults = cachedResults.map(row => ({
      id: row.id,
      provider: row.provider,
      btc: row.btc,
    }))

    return transformedResults
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Problem fetching data',
    })
  }
})
