<script setup lang="ts">
import { A, O } from '@mobily/ts-belt'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { AnyCard, isActionCard, isEventCard, isIdeaCard } from './cards'
import { useGameStore } from './store'

const gameStore = useGameStore()
const { bandMembers, deck, hand } = storeToRefs(gameStore)

const shuffleDeck = () => {
  // todo: dirty type conversion
  deck.value = A.shuffle(deck.value) as AnyCard[]
}
const draw = (amount: number) => {
  const [drawn, remaining] = O.getExn(A.splitAt(deck.value, amount))
  // todo: dirty type conversion
  hand.value = A.concat(hand.value, drawn) as AnyCard[]
  // todo: dirty type conversion
  deck.value = remaining as AnyCard[]
}
const removeCard = (card: AnyCard) => {
  // todo: dirty type conversion
  hand.value = A.reject(hand.value, ({ id }) => id === card.id) as AnyCard[]
  deck.value.push(card)
}

onMounted(() => {
  shuffleDeck()
})
</script>

<template>
  <div>
    Deck ({{ deck.length }} cards)
    <button @click="shuffleDeck">Shuffle</button>
    <button @click="draw(1)">Draw 1</button>
    <button @click="draw(5)">Draw 5</button>
  </div>
  <ul>
    <li v-for="{ id, name, energy, inspiration } of bandMembers" :key="id">
      <dl>
        <dt>Name</dt>
        <dd>{{ name }}</dd>
        <dt>Energy</dt>
        <dd>
          {{ energy }}
          <button @click="gameStore.updateEnergyFor(id, 1)">+</button>
          <button @click="gameStore.updateEnergyFor(id, -1)">-</button>
        </dd>
        <dt>Inspiration</dt>
        <dd>
          {{ inspiration }}
          <button @click="gameStore.updateInspirationFor(id, 1)">+</button>
          <button @click="gameStore.updateInspirationFor(id, -1)">-</button>
        </dd>
      </dl>
    </li>
  </ul>
  <div>
    Hand
    <ol>
      <li v-for="card of hand" :key="card.id">
        <h3 v-if="isIdeaCard(card)">{{ card.suit }}-{{ card.rank }}</h3>
        <template v-else>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <ul v-if="isEventCard(card)">
            <li v-for="(choice, index) of card.choices" :key="index">
              {{ choice.description }}
            </li>
          </ul>
          <template v-if="isActionCard(card)">
            <strong>Energy cost</strong>: {{ card.energyCost }}<br />
          </template>
        </template>
        <button @click="removeCard(card)">Remove</button>
      </li>
    </ol>
  </div>
</template>
