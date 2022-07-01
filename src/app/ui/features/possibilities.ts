import { Repository } from '#/domain/repository'
import { getElementByIdOrThrow } from '#/ui/util'
import { getPossibilitiesCount } from '#/domain/keywords'

export const initPossibilitiesFeature = (repository: Repository) => {
  const possibilities_count_element = getElementByIdOrThrow('possibilities_count')

  const possibilities_count = getPossibilitiesCount(repository)
  possibilities_count_element.textContent = `${possibilities_count}`
}
