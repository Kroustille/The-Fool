import { pickAction, pickActor, pickDetails } from './random-picker'

export const resetPickedValues = () => { 
  const { actor, action, details } = getValueElements()

  actor.textContent = pickActor()
  action.textContent = pickAction()
  details.textContent = pickDetails()
}

export const getValueElements = () => {
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
    actor:
    
    actor_element,
    action: action_element,
    details: details_element,
  }
}
