import axios from 'axios'
import { ref } from 'vue'

function userAxios(url: string) {
  const loading = ref(true)
  const loaded = ref(false)
  axios.get(url).then(res => {
    console.log(res)
    loading.value = false
    loaded.value = true
  })
  return { loading, loaded }
}
export default userAxios