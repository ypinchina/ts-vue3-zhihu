<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <Suspense>
      <template #default>
        <async-show />
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
    <div @click="increase">点击 + 1</div>
    <div>{{ greeting }}</div>
    <div @click="upGreeting">点击greeting</div>
    <div>x:{{x}}, y: {{y}}</div>

    <div v-if="loading">loading...</div>
    <div v-if="loaded">
      <img :src="result.message">
    </div>
    <div @click="openModel">点击打开dialog</div>
    <div>
      <Dialog :isOpen="isOpen" @changeIsOpenState="changeIsOpenState">my dialog!!</Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from 'vue'
import asyncShow from './components/asyncShow.vue'
import mouseCatch  from './hooks/mouseCatch'
import AxiosRequest from './hooks/useAxios'
import Dialog from './components/dialog.vue'
interface PorpType {
  count: number,
  increase: () => void,
  double: number
}
interface resultInterFace {
  message: string,
  code: string
}
export default {
  components: {
    Dialog, asyncShow
  },
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
    let isOpen = ref(false)
    const changeIsOpenState = () => {
      isOpen.value = false
    }
    const openModel = () => {
      isOpen.value = true
    }
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
    const { result, loading, loaded } = AxiosRequest<resultInterFace>('https://dog.ceo/api/breeds/image/random')
    watch(result, ()=> {
      if (result.value) {
        console.log(result.value.message)
      }
    })
    return { ...toRefs(data), upGreeting, greeting, x, y, result, loading, loaded, isOpen, changeIsOpenState, openModel }
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
