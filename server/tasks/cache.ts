export default defineTask({
  meta: {
    name: 'cache',
    description: 'Cache bitcoin prices',
  },
  // run: async ({ context }) => {
  //   try {
  //     const res = await $fetch('/api/cachedata')

  //     if (res) {
  //       console.log('Caching bitcoin prices...')
  //       return 'Success'
  //     }
  //   } catch (error) {
  //     throw error
  //   }
  // },
  run({ payload, context }) {
    console.log('Running test task...')
    return 'Success'
  },
})
