import { A, pipe } from '@mobily/ts-belt'
import { defineStore } from 'pinia'
import {
  addOrZero,
  ANGER,
  APATHY,
  BOREDOM,
  CAFFEINE,
  CALL_PAPA,
  CUSHY_JOB,
  DISAPPROVAL,
  DRUNK,
  EFFICIENCY,
  ENERGY_DRINK,
  MELANCHOLY,
  OOPS,
  PACK_O_SMOKES,
  PROMOTION,
  SADNESS,
  SHITTY_JOB,
  SLEEP,
  THE_PUB,
} from './cards'
import { generateIdeaCards } from './cards/idea-cards'
import { GameState, updateStatFor } from './state'

export const initialState: GameState = {
  fame: 0,
  money: 5,
  bandMembers: {
    rhythm: { id: 'rhythm', name: 'Hank', energy: 2, inspiration: 2 },
    bass: { id: 'bass', name: 'Claire', energy: 2, inspiration: 2 },
    chords: { id: 'chords', name: 'Geoffrey', energy: 2, inspiration: 2 },
  },
  previousTurns: [],
  deck: [
    SADNESS,
    SADNESS,
    SADNESS,
    MELANCHOLY,
    MELANCHOLY,
    MELANCHOLY,
    ANGER,
    ANGER,
    ANGER,
    SHITTY_JOB,
    SHITTY_JOB,
    CUSHY_JOB,
    CAFFEINE,
    CAFFEINE,
    CAFFEINE,
    CAFFEINE,
    CAFFEINE,
    CAFFEINE,
    ENERGY_DRINK,
    ENERGY_DRINK,
    ENERGY_DRINK,
    EFFICIENCY,
    CALL_PAPA,
    SLEEP,
    THE_PUB,
    PROMOTION,
    DISAPPROVAL,
    BOREDOM,
    BOREDOM,
    BOREDOM,
    APATHY,
    OOPS,
    DRUNK,
    DRUNK,
    PACK_O_SMOKES,
    PACK_O_SMOKES,
    PACK_O_SMOKES,
    ...pipe(generateIdeaCards(), A.shuffle, A.take(5)),
  ],
  hand: [],
}

export const useGameStore = defineStore('gameState', {
  state: () => initialState,
  // getters: {
  //   bandMemberById: (state) => (id: string) => state.bandMembers[id],
  // },
  actions: {
    // todo: use lenses
    updateEnergyFor(bandMemberId: string, amount: number) {
      this.$state.bandMembers[bandMemberId] = updateStatFor(
        'energy',
        addOrZero(amount),
      )(this.$state.bandMembers[bandMemberId])
    },
    updateInspirationFor(bandMemberId: string, amount: number) {
      this.$state.bandMembers[bandMemberId] = updateStatFor(
        'inspiration',
        addOrZero(amount),
      )(this.$state.bandMembers[bandMemberId])
    },
    //   playCard(card: AnyCard) {
    //     this.$state = card.instant(this.$state)
    //   },
  },
})
