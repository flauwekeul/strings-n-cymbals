import { GameState } from '@/state'

export interface BaseCard {
  id: string
  title: string
  description: string
  flavourText?: FlavourText
  cause?: AnyCard // | Trait
}

export interface FlavourText {
  text: string
  source: string
  link?: string
}

export interface GameStateUpdater {
  (gameState: Readonly<GameState>): GameState
}

// action card

export interface ActionCard extends BaseCard {
  energyCost: number
  instant: GameStateUpdater
  /**
   * This function is called the turn after the card is played
   */
  nextTurnStart: GameStateUpdater
}

export type MinimalActionCard = Optional<
  ActionCard,
  'instant' | 'nextTurnStart'
>

// status card

export interface StatusCard extends BaseCard {
  thisTurnStart: GameStateUpdater
}

export type MinimalStatusCard = Optional<StatusCard, 'thisTurnStart'>

// event card

export interface EventCard extends BaseCard {
  choices: EventCardChoice[]
}

export interface EventCardChoice {
  description: string
  instant: GameStateUpdater
}

export type MinimalEventCard = Omit<EventCard, 'choices'> & {
  choices: Optional<EventCardChoice, 'instant'>[]
}

export type AnyCard = ActionCard | StatusCard | EventCard

// utils

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
