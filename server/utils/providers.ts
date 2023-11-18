async function getOfferFromPaybis(amount: number): Promise<string | void> {
  try {
    const res = await $fetch(
      'https://api.paybis.com/public/processing/v2/quote/buy-crypto',
      {
        method: 'POST',
        body: JSON.stringify({
          currencyCodeFrom: 'EUR',
          currencyCodeTo: 'BTC',
          requestedAmount: { amount: amount.toString(), currencyCode: 'EUR' },
          requestedAmountType: 'from',
          promoCode: null,
          paymentMethod: 'credit-card',
        }),
      }
    )

    return (
      res as { paymentMethods?: { amountTo?: { amount?: string } }[] }
    )?.paymentMethods?.[0]?.amountTo?.amount?.toString()
  } catch (error) {
    console.log(error)
  }
}

async function getOfferFromGuardarian(amount: number): Promise<string | void> {
  try {
    const res = await $fetch(
      `https://api-payments.guardarian.com/v1/estimate?to_currency=BTC&from_amount=${amount}&from_currency=EUR&from_network=EUR&to_network=BTC`,
      {
        headers: {
          'X-Api-Key': 'c14d927f-cb01-4561-9520-28ec22c92711',
        },
      }
    )
    return (res as { value?: string })?.value?.toString()
  } catch (error) {
    console.error(error)
    return
  }
}

async function getOfferFromMoonpay(amount: number): Promise<string | void> {
  try {
    const res = await $fetch(
      `https://api.moonpay.com/v3/currencies/btc/buy_quote?apiKey=pk_live_R5Lf25uBfNZyKwccAZpzcxuL3ZdJ3Hc&baseCurrencyAmount=${amount}&baseCurrencyCode=eur&fixed=true&areFeesIncluded=true&regionalPricing=true&quoteType=principal`
    )
    return (
      res as { quoteCurrencyAmount?: { toString: () => string } }
    )?.quoteCurrencyAmount?.toString()
  } catch (error) {
    console.error(error)
    return
  }
}

async function getOfferFromTransak(amount: number): Promise<string | void> {
  try {
    const res = await $fetch(
      `https://api.transak.com/api/v1/pricing/public/quotes?fiatCurrency=EUR&cryptoCurrency=BTC&paymentMethod=credit_debit_card&isBuyOrSell=BUY&fiatAmount=${amount}&partnerApiKey=02624956-010b-4775-8e31-7b9c8b82df76&network=mainnet`
    )
    return (
      res as { response?: { cryptoAmount?: { toString: () => string } } }
    )?.response?.cryptoAmount?.toString()
  } catch (error) {
    console.error(error)
    return
  }
}

type Results = {
  id: number
  provider: string
  btc: string
}

export async function getAllOffers(amount: number): Promise<Results[]> {
  const [paybis, guardarian, moonpay, transak] = await Promise.all([
    getOfferFromPaybis(amount),
    getOfferFromGuardarian(amount),
    getOfferFromMoonpay(amount),
    getOfferFromTransak(amount),
  ])

  const results: Results[] = []

  if (paybis) results.push({ id: 1, provider: 'paybis', btc: paybis })
  if (guardarian)
    results.push({ id: 2, provider: 'guardarian', btc: guardarian })
  if (moonpay) results.push({ id: 3, provider: 'moonpay', btc: moonpay })
  if (transak) results.push({ id: 4, provider: 'transak', btc: transak })

  return results
}
