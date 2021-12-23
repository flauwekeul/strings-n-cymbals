export interface GameState {
  energy: number
  fame: number
  inspiration: number
  money: number
  cardsPlayed: PlayedCard[]
}

export interface Card {
  id: string
  title: string
  description: string
  cost: number
  instant(gameState: Readonly<GameState>): GameState
  nextTurn(gameState: Readonly<GameState>): GameState
}

export interface PlayedCard extends Card {
  turn: number
}
