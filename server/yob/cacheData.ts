import { client } from '../db/dbClient'

type OfferData = {
  provider: string
  btc: string
}

export default async function cacheData() {
  const offers = await getAllOffers(100)

  const offersData: OfferData[] = Object.keys(offers).map(provider => {
    const offer = offers[provider]
    return {
      provider,
      ...offer,
    }
  })

  try {
    for (const offer of offersData) {
      await client.execute({
        sql: 'UPDATE cached_prices SET btc = :btc, updated = CURRENT_TIMESTAMP WHERE provider = :provider',
        args: { btc: offer.btc, provider: offer.provider },
      })
    }
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Problem fetching data',
    })
  }
  return 'cached'
}
