import { possible_actions } from './data/possible_actions'
import { possible_actors } from './data/possible_actors'
import { possible_details } from './data/possible_details'

export const pickActor = () => {
  const index = Math.floor(Math.random() * possible_actors.length)
  return possible_actors[index]
}

export const pickAction = () => {
  const index = Math.floor(Math.random() * possible_actions.length)
  return possible_actions[index]
}

export const pickDetails = () => {
  const index = Math.floor(Math.random() * possible_details.length)
  return possible_details[index]
}
