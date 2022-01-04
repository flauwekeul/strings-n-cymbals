import {
  ActionCard,
  EventCard,
  MinimalActionCard,
  MinimalEventCard,
  MinimalStatusCard,
  StatusCard,
} from '@/cards'
import { D, F } from '@mobily/ts-belt'

export const createActionCard = (card: MinimalActionCard): ActionCard => ({
  instant: F.identity,
  nextTurnStart: F.identity,
  ...card,
})

export const createStatusCard = (card: MinimalStatusCard): StatusCard => ({
  thisTurnStart: F.identity,
  ...card,
})

export const createEventCard = (card: MinimalEventCard): EventCard => ({
  ...card,
  // todo: test if this works
  choices: card.choices.map(D.merge({ instant: F.identity })),
})
