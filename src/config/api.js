import { create } from 'axios'

export default create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})
