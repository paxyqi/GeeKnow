import Vue from 'vue'
import axios from 'axios'

//let Url = 'http://47.94.86.240:3000/api/v1/'
let Url = 'http://127.0.0.1:3000/api/v1/'

axios.defaults.baseURL = Url

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
  return config
})

Vue.prototype.$http = axios

export { Url }
