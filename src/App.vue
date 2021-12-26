<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { WORK } from './cards/action-cards'
import Card from './components/Card.vue'
import { useGameStore } from './store'

const { energy, fame, inspiration, money } = storeToRefs(useGameStore())
const card = WORK
</script>

<template>
  <dl>
    <dt>Energy</dt>
    <dd>{{ energy }}</dd>
    <dt>Fame</dt>
    <dd>{{ fame }}</dd>
    <dt>Inspiration</dt>
    <dd>{{ inspiration }}</dd>
    <dt>Money</dt>
    <dd>{{ money }}</dd>
  </dl>
  <Card :card="card" />
</template>
