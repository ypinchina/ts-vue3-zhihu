<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <div @click="increase">点击 + 1</div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    const double = computed(() => {
      return count.value * 2
    })
    return { count, increase, double }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
