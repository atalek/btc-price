import { sql } from 'drizzle-orm'
import { db, tables } from '../utils/db'

type OfferData = {
  provider: string
  btc: string
}

export default defineEventHandler(async event => {
  const offers = await getAllOffers(100)

  const offersData: OfferData[] = Object.keys(offers).map(provider => ({
    provider,
    ...offers[provider],
  }))

  try {
    for (const offer of offersData) {
      // Check if the record exists
      const existingRecord = await db()
        .select()
        .from(tables.cachedPrices)
        .where(sql`provider = ${offer.provider}`)

      if (existingRecord.length > 0) {
        // If the record exists, update it
        await db()
          .update(tables.cachedPrices)
          .set({ btc: offer.btc, updatedAt: sql`CURRENT_TIMESTAMP` })
          .where(sql`provider = ${offer.provider}`)
          .execute()
      } else {
        // If the record does not exist, insert a new one
        await db()
          .insert(tables.cachedPrices)
          .values({
            provider: offer.provider,
            btc: offer.btc,
          })
          .execute()
      }
    }
    return 'data cached'
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Problem caching data',
    })
  }
})
