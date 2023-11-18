<script setup lang="ts">
useSeoMeta({
  title: 'Bitcoin Price Checker',
  ogTitle: 'Bitcoin Price Checker',
  description: 'Bitcoin Price checker web-app',
  ogDescription: 'Bitcoin Price checker web-app',
  ogImage:
    'https://seeklogo.com/images/N/nuxt-logo-1CCC5F38FD-seeklogo.com.png',
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
