import { Repository } from '#/domain/repository'
import { initPossibilitiesFeature } from '#/ui/features/possibilities'
import { initResetFeature } from '#/ui/features/reset'

export const init = (repository: Repository) => {
  initResetFeature(repository)
  initPossibilitiesFeature(repository)
}
