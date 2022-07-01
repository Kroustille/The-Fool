import { KeywordCode } from '#/domain/keywords'
import { Repository } from '#/domain/repository'
import { possible_actions } from '#/storage/static/possible_actions'
import { possible_actors } from '#/storage/static/possible_actors'
import { possible_details } from '#/storage/static/possible_details'

export const initStaticStorage = (): Repository => {
  return {
    getKeywordCount: (code: KeywordCode) => {
      switch (code) {
      case 'action': return possible_actions.length
      case 'actors': return possible_actors.length
      case 'details': return possible_details.length
      }
    },
    getKeywordAtPosition: (code: KeywordCode, position: number) => {
      switch (code) {
      case 'action': return possible_actions[position]
      case 'actors': return possible_actors[position]
      case 'details': return possible_details[position]
      }
    }
  }
}
