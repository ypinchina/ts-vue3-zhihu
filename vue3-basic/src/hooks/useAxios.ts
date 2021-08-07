import axios from 'axios'
import { ref } from 'vue'

function userAxios<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  axios.get(url).then(res => {
    console.log(res)
    result.value = res.data
    loading.value = false
    loaded.value = true
  }).catch(err => {
    error.value = err
  })
  return { loading, loaded ,result, error }
}
export default userAxios