import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export const svLocale = window.$cookies.get('locale') === null ? 'es' : window.$cookies.get('locale')
