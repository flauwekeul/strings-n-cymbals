import { BandMember, BandMemberStats } from '@/bandMembers'
import { A, D, O, pipe } from '@mobily/ts-belt'
import { GameState } from './types'

// band members

// export const bandMemberById =
//   ({ bandMembers }: GameState) =>
//   (id: string) =>
//     pipe(
//       bandMembers,
//       A.find((bandMember) => bandMember.id === id),
//       O.getExn,
//     )

export const updateStatFor = <S extends keyof BandMemberStats>(
  statName: S,
  fn: (value: BandMember[S]) => BandMember[S],
) => D.updateUnsafe(statName, fn)

// turns

export const previousTurn = (state: GameState) =>
  pipe(state, D.getUnsafe('previousTurns'), A.last)
export const cardsPlayedPreviousTurn = (state: GameState) =>
  pipe(state, previousTurn, O.flatMap(D.get('cardsPlayed')))
