<script setup lang="ts">
import { useGameStore } from '@/store'
import { Card } from '@/types'

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
