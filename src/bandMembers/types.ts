export interface BandMemberStats {
  energy: number
  inspiration: number
}

export interface BandMember extends BandMemberStats {
  readonly id: 'rhythm' | 'bass' | 'chords'
  name: string
}
