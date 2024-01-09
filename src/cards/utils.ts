import { BaseCard } from '@/cards'
import { A, N } from '@mobily/ts-belt'
import { ActionCard, AnyCard, EventCard, IdeaCard, StatusCard } from './types'

export const isActionCard = (card: AnyCard): card is ActionCard =>
  (card as ActionCard)._isAction

export const isEventCard = (card: AnyCard): card is EventCard =>
  (card as EventCard)._isEvent

export const isIdeaCard = (card: AnyCard): card is IdeaCard =>
  (card as IdeaCard)._isIdea

export const isStatusCard = (card: AnyCard): card is StatusCard =>
  (card as StatusCard)._isStatus

export const findCard = (targetCard: BaseCard) =>
  A.find<BaseCard>((card) => targetCard.id === card.id)

export const addOrZero = (amount: number) => (current: number) =>
  N.clamp(N.add(current, amount), 0, Infinity)
