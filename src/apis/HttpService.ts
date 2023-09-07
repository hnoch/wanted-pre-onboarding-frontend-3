import axios from 'axios'

const HttpService = axios.create()
HttpService.defaults.baseURL = 'http://localhost:4000/'

HttpService.interceptors.request.use(config => {
  return config
})

HttpService.interceptors.response.use(response => {
  return response
})

export default HttpService
