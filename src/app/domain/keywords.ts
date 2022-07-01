import { Repository } from '#/domain/repository'

export type KeywordCode = 'action' | 'actors' | 'details'

export const pickKeyword = (code: KeywordCode, repository: Repository) => {
  const actors_count = repository.getKeywordCount(code)
  const index = getRandomIndex(actors_count)
  return repository.getKeywordAtPosition(code, index)
}

const getRandomIndex = (max_index: number): number => {
  return Math.floor(Math.random() * max_index)
}

export const getPossibilitiesCount = (repository: Repository) => {
  return repository.getKeywordCount('actors') * repository.getKeywordCount('action') * repository.getKeywordCount('details')
}
