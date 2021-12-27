import { findCard } from '@/cards'
import { cardsPlayedPreviousTurn, updateStat } from '@/state'
import { N, O, pipe } from '@mobily/ts-belt'
import { createPlayCard } from './createCard'

// basic cards

export const INSPIRATION = createPlayCard({
  id: 'inspiration',
  title: 'Inspiration',
  description: 'Gain 1 inspiration',
  energyCost: 1,
  instant: updateStat('inspiration', N.add(1)),
})

export const WORK = createPlayCard({
  id: 'work',
  title: 'Work',
  description: 'Gain 1 money.',
  flavourText: {
    text: 'It’s been a hard day’s night. And I’ve been working like a dog',
    source: 'The Beatles',
  },
  energyCost: 2,
  instant: updateStat('money', N.add(3)),
})

// other cards

export const SLEEP = createPlayCard({
  id: 'sleep',
  title: 'Good night’s rest',
  description: 'Discard a card. Next day gain 1 energy.',
  energyCost: 0,
  // instant: todo: discard a card (if any)
  nextTurnStart: updateStat('energy', N.add(1)),
})

export const CAFFEINE = createPlayCard({
  id: 'caffeine',
  title: 'Caffeine',
  description:
    'Gain 1 energy. If played more than once in a turn, lose 1 energy next day.',
  flavourText: {
    text: 'Fresh pots!',
    source: 'Dave Grohl',
    link: 'https://youtu.be/fhdCslFcKFU',
  },
  energyCost: 0,
  instant: updateStat('energy', N.add(1)),
  nextTurnStart: (state) =>
    pipe(
      state,
      cardsPlayedPreviousTurn,
      O.flatMap(findCard(CAFFEINE)),
      O.mapWithDefault(state, () => updateStat('energy', N.subtract(1))(state)),
    ),
})

export const POSSIBILITY = createPlayCard({
  id: 'possibility',
  title: 'Possibility',
  description: 'Gain 1 inspiration. Draw 2 cards.',
  energyCost: 1,
  instant: updateStat('inspiration', N.add(1)), // todo: draw 2 cards
})

export const READY = createPlayCard({
  id: 'ready',
  title: 'Ready',
  description: 'Draw 1 card. Discard 1 card.',
  energyCost: 0,
  // todo: draw 1 card, discard 1 card
})
