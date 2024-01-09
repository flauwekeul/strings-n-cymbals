import { GameState } from '@/state'

export interface BaseCard {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly flavourText?: FlavourText
  readonly cause?: AnyCard // | Trait
}

export interface FlavourText {
  readonly text: string
  readonly source: string
  readonly link?: string
}

export interface GameStateUpdater {
  (gameState: Readonly<GameState>): GameState
}

// action card

export interface ActionCard extends BaseCard {
  readonly _isAction: true
  energyCost: number
  instant: GameStateUpdater
  /**
   * This function is called the turn after the card is played
   */
  nextTurnStart: GameStateUpdater
}

export type MinimalActionCard = Optional<
  ActionCard,
  '_isAction' | 'instant' | 'nextTurnStart'
>

// status card

export interface StatusCard extends BaseCard {
  readonly _isStatus: true
  thisTurnStart: GameStateUpdater
}

export type MinimalStatusCard = Optional<
  StatusCard,
  '_isStatus' | 'thisTurnStart'
>

// event card

export interface EventCard extends BaseCard {
  readonly _isEvent: true
  readonly choices: EventCardChoice[]
}

export interface EventCardChoice {
  readonly description: string
  instant: GameStateUpdater
}

export type MinimalEventCard = Omit<EventCard, '_isEvent' | 'choices'> & {
  readonly choices: Optional<EventCardChoice, 'instant'>[]
}

// idea cards

export enum Suit {
  Melody = 'Melody',
  Lyrics = 'Lyrics',
  Chords = 'Chords',
  Rhythm = 'Rhythm',
}

export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface IdeaCard {
  readonly _isIdea: true
  readonly id: string
  suit: Suit
  rank: Rank
}

export type MinimalIdeaCard = Optional<IdeaCard, '_isIdea' | 'id'>

export type AnyCard = ActionCard | StatusCard | EventCard | IdeaCard

// utils

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
