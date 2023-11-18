import { client } from '../db/dbClient'

export default defineEventHandler(async () => {
  try {
    const cachedValues = await client.execute({
      sql: 'select * from cached_prices order by btc desc',
      args: {},
    })
    const transformedResults = cachedValues?.rows.map(row => {
      const id = row[0]
      const provider = row[1]
      const btc = row[2]
      return { id, provider, btc }
    })

    return transformedResults
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Problem fetching data',
    })
  }
})
