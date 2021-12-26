import { Card, CardWithOptionalMethods } from '@/types'
import { F } from '@mobily/ts-belt'

export const createCard = (card: CardWithOptionalMethods): Card => ({
  instant: F.identity,
  nextTurnStart: F.identity,
  ...card,
})
