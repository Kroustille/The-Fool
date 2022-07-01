import { pickAction, pickActor, pickDetails } from '../../domain/random-picker'

import { getElementByIdOrThrow } from '#/ui/util'

export const initResetFeature = () => {
  const reset_button = document.getElementById('reset')
  if (!reset_button) {
    throw new Error('reset button not found')
  }
  resetPickedValues()
  reset_button.addEventListener('click', resetPickedValues)
}

export const resetPickedValues = () => { 
  const actor = getElementByIdOrThrow('actor')
  const action = getElementByIdOrThrow('action')
  const details = getElementByIdOrThrow('details')

  actor.textContent = pickActor()
  action.textContent = pickAction()
  details.textContent = pickDetails()
}
