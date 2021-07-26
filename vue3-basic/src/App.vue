<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <div @click="increase">点击 + 1</div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs } from 'vue'
interface PorpType {
  count: number,
  increase: () => void,
  double: number
}
export default {
  setup() {
    // 第一课，使用ref
    // const count = ref(0)
    // const increase = () => {
    //   count.value++
    // }
    // const double = computed(() => {
    //   return count.value * 2
    // })
    //第二课，使用reactive对象
    const data:PorpType = reactive({
      count: 0,
      increase: () => data.count++ ,
      double: computed(() => data.count * 2 )
    })
    return { ...toRefs(data) }
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
