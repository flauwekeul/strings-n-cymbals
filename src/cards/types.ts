import { GameState } from '@/state'

export interface Card {
  id: string
  title: string
  description: string
  flavourText?: FlavourText
  energyCost: number
  instant(gameState: Readonly<GameState>): GameState
  /**
   * This function is called the turn after the card is played
   */
  nextTurnStart(gameState: Readonly<GameState>): GameState
}

export type CardMethods = 'instant' | 'nextTurnStart'

export type CardWithOptionalMethods = Omit<Card, CardMethods> &
  Partial<Pick<Card, CardMethods>>

export interface FlavourText {
  text: string
  source: string
  link?: string
}
