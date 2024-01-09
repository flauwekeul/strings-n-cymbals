import {
  ActionCard,
  EventCard,
  MinimalActionCard,
  MinimalEventCard,
  MinimalStatusCard,
  StatusCard,
} from '@/cards'
import { D, F } from '@mobily/ts-belt'
import { IdeaCard, MinimalIdeaCard } from './types'

export const createActionCard = (card: MinimalActionCard): ActionCard => ({
  instant: F.identity,
  nextTurnStart: F.identity,
  ...card,
  _isAction: true,
})

export const createStatusCard = (card: MinimalStatusCard): StatusCard => ({
  thisTurnStart: F.identity,
  ...card,
  _isStatus: true,
})

export const createEventCard = (card: MinimalEventCard): EventCard => ({
  ...card,
  _isEvent: true,
  // todo: test if this works
  choices: card.choices.map(D.merge({ instant: F.identity })),
})

export const createIdeaCard = (
  card: MinimalIdeaCard,
  index: number,
): IdeaCard => ({
  ...card,
  _isIdea: true,
  id: `${card.suit.at(0)}${card.rank}-${index}`,
})
