import { init } from '#/ui/init'
import { initStaticStorage } from '#/storage/static/init'

document.addEventListener('DOMContentLoaded', () => {
  const repository = initStaticStorage()
  init(repository)
})
