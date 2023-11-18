export function useOffers(amount: string) {
  try {
    const data = $fetch(`/api/offers?amount=${amount}`)
    return data
  } catch (error) {
    console.error(error)
  }
}
