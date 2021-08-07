<!-- 组件说明 -->
<template>
  <teleport to="#dialogDiv">
    <div class="dialog" v-if="isOpen">
      <div>dialog title</div>
      <div><slot> content ... </slot></div>
      <div @click="buttonClick">关闭dialog</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isOpen: {
      default: false,
      type: Boolean
    }
  },
  emits: {
    'changeIsOpenState': null
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit('changeIsOpenState')
    }
    return { buttonClick }
  }
})
</script>

<style scoped>
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid #999;
  background-color: #fff;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}
</style>
