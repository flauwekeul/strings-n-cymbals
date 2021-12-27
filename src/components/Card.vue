<script setup lang="ts">
import { Card } from '@/cards'
import { useGameStore } from '@/store'

interface Props {
  card: Card
}

const props = defineProps<Props>()
const gameStore = useGameStore()

const playCard = () => {
  gameStore.playCard(props.card)
}
</script>

<template>
  <button @click="playCard">play card</button>
</template>
