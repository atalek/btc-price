<script lang="ts" setup>
import debounce from 'lodash.debounce'

export type Results = {
  id: number
  provider: string
  btc: string
}
const btcPrice = await useBtcPrice()

const defaultAmount = '100'

const amount = ref(defaultAmount)
const cachedResults = useCachedData()
const offerResults = ref<Results[] | null>(null)
const isLoading = ref(true)

if (cachedResults) {
  isLoading.value = false
}

const debouncedUseOffers = debounce(async (amount: string) => {
  const results = await useOffers(amount)
  offerResults.value = results
  isLoading.value = false

  if (offerResults.value) {
    offerResults.value.sort((a, b) => {
      const btcA = parseFloat(a.btc)
      const btcB = parseFloat(b.btc)
      return btcB - btcA
    })
  }
}, 600)

const showCached = computed(() => amount.value === defaultAmount)

const results = computed(() => {
  if (showCached.value) {
    return cachedResults?.value as Results[]
  } else {
    return offerResults?.value as Results[]
  }
})

watch(
  () => amount.value,
  async (newValue, oldValue) => {
    if (newValue !== defaultAmount && newValue !== oldValue) {
      isLoading.value = true
      await debouncedUseOffers(newValue)
    }
  }
)
</script>

<template>
  <main class="max-w-2xl mx-auto px-4 py-8">
    <h1
      class="uppercase text-5xl text-center font-bold bg-gradient-to-br from-green-400 to-cyan-400 bg-clip-text text-transparent from-30%"
    >
      Find the cheapest BTC
    </h1>
    <h2 class="text-xl font-bold text-center my-6">
      1 BTC currently costs {{ btcPrice }} euros.
    </h2>

    <div class="flex justify-center mt-6">
      <div
        class="flex items-center bg-blue-950 border border-white/10 rounded-lg"
      >
        <input
          type="text"
          class="border-white/10 bg-blue-950 p-2 border-0 w-36 pl-4 bg-transparent text-2xl outline-none"
          v-model="amount"
          placeholder="amount"
        />
        <span class="text-white/50 px-4">EUR</span>
      </div>
    </div>
    <div class="mt-6">
      <ResultRow
        v-if="!isLoading && results !== null && results!.length > 0"
        v-for="result in results"
        :key="result.btc"
        :providerName="result.provider"
        :btc="result.btc"
        :loading="isLoading"
      />

      <LoadingSkeleton v-else />
    </div>
  </main>
</template>
