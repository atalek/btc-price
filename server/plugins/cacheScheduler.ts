import { useScheduler } from '#scheduler'
import cacheData from '../yob/cacheData'

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler()

  scheduler
    .run(() => {
      cacheData()
    })
    .everySixHours()
}
