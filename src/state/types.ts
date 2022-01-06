import { BandMember } from '@/bandMembers'
import { AnyCard } from '@/cards'

export interface Stats {
  energy: number
  fame: number
  inspiration: number
  money: number
}

export interface GameState extends Stats {
  /**
   * previously played turns (excluding the current) in chronological order
   */
  readonly previousTurns: Readonly<Turn>[]
  bandMembers: [BandMember, BandMember, BandMember]
}

export interface Turn {
  readonly index: number
  readonly cardsPlayed: AnyCard[]
}
