import { defineStore } from 'pinia'
import { AnyCard } from './cards'
import { GameState } from './state'

export const initialState: GameState = {
  energy: 3,
  fame: 0,
  inspiration: 2,
  money: 0,
  previousTurns: [],
}

export const useGameStore = defineStore('gameState', {
  state: () => initialState,
  actions: {
    playCard(card: AnyCard) {
      this.$state = card.instant(this.$state)
    },
  },
})
