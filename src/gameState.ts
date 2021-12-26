import { A, D, O, pipe } from '@mobily/ts-belt'
import { Card, GameState, Stats } from './types'

// stats
export const updateStat =
  <K extends keyof Stats>(
    statName: K,
    fn: (value: GameState[K]) => GameState[K],
  ) =>
  (state: GameState) =>
    pipe(state, D.updateUnsafe(statName, fn))

// turns
export const previousTurn = (state: GameState) =>
  pipe(state, D.getUnsafe('previousTurns'), A.last)
export const cardsPlayedPreviousTurn = (state: GameState) =>
  pipe(state, previousTurn, O.flatMap(D.get('cardsPlayed')))

// cards
export const findCard = (targetCard: Card) =>
  A.find<Card>((card) => targetCard.id === card.id)
