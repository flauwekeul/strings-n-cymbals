import { createActionCard } from './createCard'

// basic cards

export const SADNESS = createActionCard({
  id: 'sadness',
  title: 'Sadness',
  description: 'Gain 2 inspiration. Discard 1 card.',
  energyCost: 1,
  // instant: updateStat('inspiration', N.add(2)),
})

export const MELANCHOLY = createActionCard({
  id: 'melancholy',
  title: 'Melancholy',
  description: 'Gain 1 inspiration.',
  energyCost: 0,
  // instant: updateStat('inspiration', N.add(1)),
})

export const ANGER = createActionCard({
  id: 'anger',
  title: 'Anger',
  description: 'Gain 3 inspiration.',
  energyCost: 2,
  // instant: updateStat('inspiration', N.add(3)),
})

export const SHITTY_JOB = createActionCard({
  id: 'shitty-job',
  title: 'Shitty job',
  description: 'Gain 3 money.',
  energyCost: 2,
  // instant: updateStat('money', N.add(3)),
})

export const CUSHY_JOB = createActionCard({
  id: 'cushy-job',
  title: 'Cushy job',
  description: 'Gain 5 money.',
  energyCost: 2,
  // instant: updateStat('money', N.add(5)),
  // cause: Educated
})

export const CAFFEINE = createActionCard({
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
  // instant: updateStat('energy', N.add(1)),
  // nextTurnStart: (state) =>
  //   pipe(
  //     state,
  //     cardsPlayedPreviousTurn,
  //     O.flatMap(findCard(CAFFEINE)),
  //     O.mapWithDefault(state, () =>
  //       updateStat('energy', addOrZero(1))(state),
  //     ),
  //   ),
})

export const ENERGY_DRINK = createActionCard({
  id: 'energy-drink',
  title: 'Energy drink',
  description: 'Gain 2 energy. Lose 1 inspiration.',
  energyCost: 0,
  // instant: flow(
  //   updateStat('energy', N.add(2)),
  //   updateStat('inspiration', addOrZero(1)),
  // ),
})

// from traits

export const EFFICIENCY = createActionCard({
  id: 'efficiency',
  title: 'Efficiency',
  description: 'Draw 1 card. Discard 1 card.',
  energyCost: 0,
  // cause: Organized trait
  // todo: draw 1 card, discard 1 card
})

export const CALL_PAPA = createActionCard({
  id: 'call-papa',
  title: 'Call papa',
  description: 'Can only be played when you have 0 money. Gain 3 money',
  energyCost: 1,
  // cause: Sugardaddy trait
  // todo: this card can be retained
})

// other cards

export const SLEEP = createActionCard({
  id: 'sleep',
  title: 'Good night’s rest',
  description: 'Discard a card. Next day gain 1 energy.',
  energyCost: 0,
  // instant: todo: discard a card (if any)
  // nextTurnStart: updateStat('energy', N.add(1)),
})

export const POSSIBILITY = createActionCard({
  id: 'possibility',
  title: 'Possibility',
  description: 'Gain 1 inspiration. Draw 2 cards.',
  energyCost: 1,
  // instant: updateStat('inspiration', N.add(1)), // todo: draw 2 cards
})
