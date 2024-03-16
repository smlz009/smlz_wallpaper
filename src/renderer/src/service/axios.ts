import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://47.107.128.145:8000/',
  timeout: 5000
})

//请求拦截
instance.interceptors.request.use((config) => {
  return config
})

//返回拦截
instance.interceptors.response.use((response) => {
  // 关闭 Loading 实例

  return response
})

export default instance
