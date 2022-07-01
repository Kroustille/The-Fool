import { pickAction, pickActor, pickDetails } from './random-picker'

document.addEventListener('DOMContentLoaded', () => {
  const reset_button = document.getElementById('reset')
  if (!reset_button) {
    throw new Error('reset button not found')
  }

  reset_button.addEventListener('click', resetPickedValues)
})

const resetPickedValues = () => {
  const { actor, action, details } = getValueElements()

  actor.textContent = pickActor()
  action.textContent = pickAction()
  details.textContent = pickDetails()
}

const getValueElements = () => {
  const actor_element = document.getElementById('actor')
  if (!actor_element) {
    throw new Error('actor element not found')
  }

  const action_element = document.getElementById('action')
  if (!action_element) {
    throw new Error('action element not found')
  }

  const details_element = document.getElementById('details')
  if (!details_element) {
    throw new Error('details element not found')
  }

  return {
    actor: actor_element,
    action: action_element,
    details: details_element,
  }
}