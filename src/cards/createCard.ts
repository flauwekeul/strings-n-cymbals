import { Card, CardWithOptionalMethods } from '@/cards'
import { F } from '@mobily/ts-belt'

export const createPlayCard = (card: CardWithOptionalMethods): Card => ({
  instant: F.identity,
  nextTurnStart: F.identity,
  ...card,
})
