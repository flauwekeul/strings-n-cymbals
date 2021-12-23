import { Card } from './types'

const identity = <T>(_: T) => _

export const WORK: Card = {
  id: 'work',
  title: 'Work',
  description: '',
  cost: 2,
  instant: (state) => ({ ...state, money: state.money + 1 }),
  nextTurn: identity,
}

export const RELAX: Card = {
  id: 'relax',
  title: 'Relax',
  description: '',
  cost: 1,
  instant: identity,
  nextTurn: identity,
}

export const SLEEP: Card = {
  id: 'sleep',
  title: 'Good night’s rest',
  description: '',
  cost: 1,
  instant: identity,
  nextTurn: identity,
}

export const ESPRESSO: Card = {
  id: 'espresso',
  title: 'Espresso',
  description: '',
  cost: 0,
  instant: identity,
  nextTurn: identity,
}
