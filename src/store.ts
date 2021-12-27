import { defineStore } from 'pinia'
import { Card } from './cards'
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
    playCard(card: Card) {
      this.$state = card.instant(this.$state)
    },
  },
})
