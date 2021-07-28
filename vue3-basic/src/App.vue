<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <div @click="increase">点击 + 1</div>
    <div>{{ greeting }}</div>
    <div @click="upGreeting">点击greeting</div>
    <div>x:{{x}}, y: {{y}}</div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch, onMounted, onUnmounted } from 'vue'
import { mouseCatch } from './hooks/mouseCatch'
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
    // 第三课 ，老瓶新酒，生命周期略
    // 第四课 watch在vue3中的使用
    const greeting = ref('')
    const upGreeting = () => {
      greeting.value += 'hello '
    }
    watch(greeting,(val) => {
      document.title += val
    })
    // 第五课 composition API 模块化封装调用
    // 基础款
    // const x = ref(0)
    // const y = ref(0)
    // const upMouse = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(() => {
    //   document.addEventListener('click', upMouse)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', upMouse)
    // })
    //加强款
    const { x, y } = mouseCatch()
    return { ...toRefs(data), upGreeting, greeting, x, y }
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
