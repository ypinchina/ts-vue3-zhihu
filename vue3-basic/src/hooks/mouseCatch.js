import { ref, onMounted, onUnmounted } from 'vue'
function mouseCatch() {
  const x = ref(0)
  const y = ref(0)
  const upMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', upMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', upMouse)
  })
  return { x, y }
} 

export default mouseCatch