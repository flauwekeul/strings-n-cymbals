import { updateStat } from '@/state'
import { flow, N } from '@mobily/ts-belt'
import { createEventCard } from '.'
import { subtractOrZero } from './utils'

export const THE_PUB = createEventCard({
  id: 'the-pub',
  title: 'The Pub',
  description: 'Spend 1 money for some fun or relaxation.',
  // todo: reference Piano man?
  choices: [
    {
      description: 'Fun: gain 2 inspiration.',
      instant: flow(
        updateStat('money', subtractOrZero(1)),
        updateStat('inspiration', N.add(2)),
      ),
    },
    {
      description: 'Relax: gain 2 energy.',
      instant: flow(
        updateStat('money', subtractOrZero(1)),
        updateStat('energy', N.add(2)),
      ),
    },
  ],
})

export const PROMOTION = createEventCard({
  id: 'promotion',
  title: 'Promotion',
  description: 'You can get a raise, but also more responsibilities.',
  choices: [
    {
      // todo: make this dynamic
      description:
        'Accept: “Cushy job” yields +2 (n total) money, but costs +1 (n total) energy.',
    },
    {
      description: 'Decline: replace “Promotion” with “Boss wants to see you”.',
    },
  ],
})

export const BOSS_WANTS_TO_SEE_YOU = createEventCard({
  id: 'boss-wants-to-see-you',
  title: 'Boss wants to see you',
  description: '“It has come to our attention that you seem… distracted.',
  choices: [
    {
      // todo: make this dynamic
      description:
        'Appease: keep “Cushy job”, but it yields -1 (n total) money.',
    },
    {
      description: 'Resign: replace “Cushy job” with “Shitty job”.',
    },
  ],
})

// from traits

export const DISAPPROVAL = createEventCard({
  id: 'disapproval',
  title: 'Disapproval',
  description: 'You spoke to daddy. He condemns your life choices',
  choices: [
    {
      description: 'Endure: lose 2 energy and discard a card.',
      // todo:
    },
    {
      description:
        'Defy: remove “Call papa” from the deck and pay back 2 money.',
      // todo:
    },
  ],
  // cause: Sugardaddy trait
})
