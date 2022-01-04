import { BaseCard } from '@/cards'
import { A, N } from '@mobily/ts-belt'

export const findCard = (targetCard: BaseCard) =>
  A.find<BaseCard>((card) => targetCard.id === card.id)

export const subtractOrZero = (amount: number) => (current: number) =>
  N.clamp(N.subtract(current, amount), 0, Infinity)
