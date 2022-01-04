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
  previousTurns: ReadonlyArray<Readonly<Turn>>
  bandMembers: [BandMember, BandMember, BandMember]
}

export interface Turn {
  index: number
  cardsPlayed: AnyCard[]
}
