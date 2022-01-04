import { updateStat } from '@/state'
import { flow, N } from '@mobily/ts-belt'
import { createStatusCard } from './createCard'
import { subtractOrZero } from './utils'

// fixme: what to do when multiple status cards conflict?

export const BOREDOM = createStatusCard({
  id: 'boredom',
  title: 'Boredom',
  description: 'Unplayable.',
})

export const APATHY = createStatusCard({
  id: 'apathy',
  title: 'Apathy',
  description: 'Unplayable. When this card is drawn, lose 1 inspiration.',
  thisTurnStart: updateStat('inspiration', N.subtract(1)),
})

// from traits

export const OOPS = createStatusCard({
  id: 'oops',
  title: 'Oops',
  description:
    'Unplayable. The next card played this turn costs 1 more energy.',
  // cause: todo: CLUMSY Trait
  thisTurnStart: updateStat('energy', N.subtract(1)),
})

export const DEPRESSED = createStatusCard({
  id: 'depressed',
  title: 'Depressed',
  description: 'Unplayable. When this card is drawn, lose all energy.',
  // cause: GLOOMY trait
  thisTurnStart: updateStat('energy', () => 0),
})

export const DRUNK = createStatusCard({
  id: 'drunk',
  title: 'Drunk',
  description:
    'Unplayable. This turn, cards have a random energy cost. Put “Hungover” on top of the deck.',
  // cause: Heavy drinker trait
  // thisTurnStart: todo:
  // todo: what to do when this card and QUEASY are both applied? Probably in order of when they're drawn
})

export const HUNGOVER = createStatusCard({
  id: 'hungover',
  title: 'Hungover',
  description: 'Unplayable. This turn, energy is limited to 1.',
  // cause: Heavy drinker trait
  // thisTurnStart: todo:
})

export const JACKED = createStatusCard({
  id: 'jacked',
  title: 'Jacked',
  description:
    'Unplayable. Gain 3 energy. Put “Withdrawal” on top of the deck.',
  // cause: Junkie trait,
  thisTurnStart: updateStat('energy', N.add(3)),
  // todo:
})

export const WITHDRAWAL = createStatusCard({
  id: 'withdrawal',
  title: 'Withdrawal',
  description: 'Unplayable. When this card is drawn, lose all inspiration.',
  // cause: Junkie trait,
  thisTurnStart: updateStat('inspiration', () => 0),
})

export const STONED = createStatusCard({
  id: 'stoned',
  title: 'Stoned',
  description: 'Unplayable. Gain 3 inspiration and lose 3 energy.',
  // cause: Junkie trait,
  thisTurnStart: flow(
    updateStat('inspiration', N.add(3)),
    updateStat('energy', subtractOrZero(3)),
  ),
})

export const CHAOS = createStatusCard({
  id: 'chaos',
  title: 'Chaos',
  // todo: think of something else
  description:
    'Unplayable. When this card is drawn, discard all cards in hand then draw that many.',
  // cause: Chaotic trait,
  // thisTurnStart: todo:
})

export const PACK_O_SMOKES = createStatusCard({
  id: 'pack-o-smokes',
  title: 'Pack o’ smokes',
  description: 'Unplayable. When this card is drawn, lose 1 money.',
  // cause: Smoker trait
  thisTurnStart: updateStat('money', subtractOrZero(1)),
  // todo: add option to stop smoking with a D20 roll?
})

export const STD = createStatusCard({
  id: 'std',
  title: 'STD',
  description: 'Unplayable. When this card is drawn, discard 2 cards.',
  // cause: STD trait
  // thisTurnStart: todo:
})

// from other cards

export const QUEASY = createStatusCard({
  id: 'queasy',
  title: 'Feeling queasy',
  description: 'Unplayable. This turn, actions cost 1 more energy.',
  // cause: todo: bad food
  // thisTurnStart: todo:
})
