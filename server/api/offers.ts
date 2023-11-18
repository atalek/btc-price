export default defineEventHandler(async event => {
  const { amount } = getQuery(event)

  try {
    return getAllOffers(amount as number)
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Could not fetch offers',
    })
  }
})
