import { KeywordCode } from '#/domain/keywords'

export interface Repository {
  getKeywordCount(code: KeywordCode): number
  getKeywordAtPosition(code: KeywordCode, position: number): string
}
