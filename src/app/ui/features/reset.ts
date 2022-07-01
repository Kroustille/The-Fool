import { Repository } from '#/domain/repository'
import { getElementByIdOrThrow } from '#/ui/util'
import { pickKeyword } from '#/domain/keywords'

export const initResetFeature = (repository: Repository) => {
  const reset_button = document.getElementById('reset')
  if (!reset_button) {
    throw new Error('reset button not found')
  }
  resetPickedValues(repository)
  reset_button.addEventListener('click', () => {
    resetPickedValues(repository) 
  })
}

export const resetPickedValues = (repository: Repository) => { 
  const actor = getElementByIdOrThrow('actor')
  const action = getElementByIdOrThrow('action')
  const details = getElementByIdOrThrow('details')

  actor.textContent = pickKeyword('actors', repository)
  action.textContent = pickKeyword('action', repository)
  details.textContent = pickKeyword('details', repository)
}
