import axios from 'axios'

const HttpService = axios.create()
HttpService.defaults.baseURL = 'http://localhost:4000/'

HttpService.interceptors.request.use(config => {
  return config
})

export default HttpService
