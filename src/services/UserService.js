import api from '../config/api'
import Axios from 'axios'

const userBaseEndpoint = '/AccountAPI'

export function login (nombre, password, rememberMe, email) {
  return api.post(`${userBaseEndpoint}/SignIn`, { nombre, password, rememberMe, email }).then(response => {
    const token = response.data.auth_token
    localStorage.setItem('auth_token', token)
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  })
}

export function signup (nombre, email, password) {
  return api.post(`${userBaseEndpoint}/SignUn`, { nombre, email, password }).then(response => {
    const token = response.data.auth_token
    localStorage.setItem('auth_token', token)
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  })
}

export function isLoggedIn () {
  return localStorage.getItem('auth_token')
}
