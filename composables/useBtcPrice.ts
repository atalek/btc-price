export const useBtcPrice = async () => {
  try {
    const data = await $fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur',
    )
    const bitcoinPrice = data.bitcoin.eur
    return ref(bitcoinPrice)
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error)
    return null
  }
}
