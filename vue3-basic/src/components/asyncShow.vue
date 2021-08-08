<template>
  <div>
    <div>{{result}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return new Promise((resovle) =>{
      setTimeout(() => {
        return resovle({
          result: 42
        })
      }, 3e3)
    })
  }
})
</script>

<style>

</style>