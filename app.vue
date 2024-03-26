<script setup lang="ts">
useHead({
  title: 'Bitcoin Price Checker - Stay Up-to-Date with BTC Prices',
  htmlAttrs: {
    lang: 'en',
  },

  meta: [
    {
      name: 'description',
      content:
        'Get the latest Bitcoin prices in real-time with our easy-to-use price checker. Track BTC value, market trends, and make informed decisions.',
    },
    {
      name: 'keywords',
      content:
        'bitcoin, btc, price, checker, cryptocurrency, crypto, blockchain, market, value, price tracker, live prices, real-time, market trends',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://btc-price.atalek.com/' },
    {
      property: 'og:title',
      content: 'Bitcoin Price Checker - Track BTC Prices with Ease',
    },
    {
      property: 'og:description',
      content:
        'Stay informed about Bitcoin prices effortlessly. Our price checker provides real-time updates and insights.',
    },
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    { property: 'twitter:url', content: 'https://btc-price.atalek.com/' },
    {
      property: 'twitter:title',
      content: 'Bitcoin Price Checker - Track BTC Prices in Real-Time',
    },
    {
      property: 'twitter:description',
      content:
        'Stay ahead of the curve with our Bitcoin price checker. Track BTC prices live and make informed crypto decisions.',
    },
    {
      property: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
</script>

<template>
  <NuxtPage />
</template>

<style>
body {
  height: 100vh;
  color: #fff;
  background-color: #113;
  background-image: radial-gradient(
    at 50% 50%,
    rgb(34, 102, 77) 20%,
    transparent 100%
  );
}
@keyframes from-left-to-right {
  0% {
    translate: -100%;
  }
  100% {
    translate: 100%;
  }
}

.skeleton-animation {
  animation: from-left-to-right 2s infinite;
}
</style>
