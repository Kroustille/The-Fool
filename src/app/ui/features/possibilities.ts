import { getElementByIdOrThrow } from '#/ui/util'
import { getPossibilitiesCount } from '#/domain/possibilities'

export const initPossibilitiesFeature = () => {
  const possibilities_count_element = getElementByIdOrThrow('possibilities_count')

  const possibilities_count = getPossibilitiesCount()
  possibilities_count_element.textContent = `${possibilities_count}`
}
