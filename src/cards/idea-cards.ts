import { A } from '@mobily/ts-belt'
import { createIdeaCard } from '.'
import { IdeaCard, Rank, Suit } from './types'

export const RANKS: ReadonlyArray<Rank> = [1, 2, 3, 4, 5, 6, 7]

export const generateIdeaCards = (
  suits = Object.values(Suit),
  ranks = RANKS,
): ReadonlyArray<IdeaCard> =>
  suits.flatMap((suit) =>
    ranks.flatMap((rank, index) =>
      A.repeat(1 + RANKS.length - rank, createIdeaCard({ suit, rank }, index)),
    ),
  )
