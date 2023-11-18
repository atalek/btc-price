<script lang="ts" setup>
type ResultRowProps = {
  loading?: boolean
  providerName?: string
  btc?: string
}

type Logo = {
  source: string
  invert?: boolean
}

const { providerName, btc, loading } = defineProps<ResultRowProps>()

let url = `http://${providerName}.com`
if (providerName === 'guardian') {
  url += '/buy-btc'
}

const logos: { [keys: string]: Logo } = {
  paybis: { source: '/paybis.webp', invert: true },
  guardarian: { source: 'https://guardarian.com/main-logo.svg' },
  moonpay: { source: 'https://www.moonpay.com/assets/logo-full-white.svg' },
  transak: {
    source: 'https://assets.transak.com/images/website/transak-logo-white.svg',
  },
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    class="block relative border min-h-[64px] border-white/10 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 my-2 overflow-hidden"
  >
    <div class="flex gap-4">
      <div v-if="providerName" class="grow items-center flex">
        <img
          :src="logos[providerName].source"
          class="h-8"
          :class="{ invert: logos[providerName]?.invert }"
          alt=""
        />
      </div>

      <div class="flex gap-2" v-if="btc">
        <span class="text-xl">
          {{
            new Intl.NumberFormat('en-US', { minimumFractionDigits: 8 }).format(
              parseFloat(btc)
            )
          }}
        </span>
        <span class="text-xl">BTC</span>
      </div>
    </div>
    <div
      v-if="loading"
      class="inset-0 absolute bg-gradient-to-r from-transparent via-green-600/50 to-transparent skeleton-animation border-t border-white/25"
    />
  </a>
</template>
