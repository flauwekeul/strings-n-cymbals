import { cardsPlayedPreviousTurn, findCard, updateStat } from '@/gameState'
import { N, O, pipe } from '@mobily/ts-belt'
import { createCard } from './createCard'

export const WORK = createCard({
  id: 'work',
  title: 'Work',
  description: '',
  flavourText: {
    text: 'It’s been a hard day’s night. And I’ve been working like a dog',
    source: 'The Beatles',
  },
  energyCost: 2,
  instant: updateStat('money', N.add(1)),
})

export const SLEEP = createCard({
  id: 'sleep',
  title: 'Good night’s rest',
  description: 'Discard a card. Next day gain 1 energy.',
  energyCost: 0,
  // instant: todo: discard a card (if any)
  nextTurnStart: updateStat('energy', N.add(1)),
})

export const CAFFEINE = createCard({
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
