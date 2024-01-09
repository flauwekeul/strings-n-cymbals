import { BandMember } from '@/bandMembers'
import { AnyCard } from '@/cards'

export interface GameState {
  fame: number
  money: number
  /**
   * previously played turns (excluding the current) in chronological order
   */
  readonly previousTurns: Readonly<Turn>[]
  bandMembers: Record<string, BandMember>
  deck: AnyCard[]
  hand: AnyCard[]
}

export interface Turn {
  readonly index: number
  readonly cardsPlayed: AnyCard[]
}
