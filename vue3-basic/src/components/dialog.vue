<!-- 组件说明 -->
<template>
  <teleport to="#dialogDiv">
    <div class="dialog">
      <div>dialog title</div>
      <div>dialog content ...</div>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
  }
}
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
