import { possible_actions } from '#/data/possible_actions'
import { possible_actors } from '#/data/possible_actors'
import { possible_details } from '#/data/possible_details'

export const getPossibilitiesCount = () => {
  return possible_actions.length * possible_actors.length * possible_details.length
}
