import Axios, { create } from 'axios'

export function setHeaders (authToken) {
  Axios.defaults.headers.common['Authorization'] = authToken
}

export default create({
  baseURL: process.env.API_BASE_URL
})
