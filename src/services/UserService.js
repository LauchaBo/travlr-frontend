import api from '../config/api'

export function login (email, password) {
  return api.post('/login', { email, password }).then(response => {
    localStorage.setItem('auth_token', response.data.auth_token)
    api.setHeader(response.data.auth_token)
  })
}
