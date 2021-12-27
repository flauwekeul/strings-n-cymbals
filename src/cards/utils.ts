import { Card } from '@/cards'
import { A } from '@mobily/ts-belt'

export const findCard = (targetCard: Card) =>
  A.find<Card>((card) => targetCard.id === card.id)
