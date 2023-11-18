export function useCachedData() {
  try {
    const { data } = useFetch('/api/cachedvalues')
    return ref(data)
  } catch (error) {
    console.error(error)
  }
}
