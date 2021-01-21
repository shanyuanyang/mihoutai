import axios from 'axios';
import {
  Loading,
  Message
} from 'element-ui'

const loading = {
  loadingInstance: null,
  open: function () {
    // console.log('加载中', this.loadingInstance);
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        text: '拼命加载中',
        target: '.main',
        background: 'rgba(0, 0, 0, 0.5)'
      })
    }
  },
  close: function () {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器 
request.interceptors.request.use(config => {
  loading.open() // 打开加载效果 
  // console.log(config)
  // if (config.url === "/specialsub/index") {
  //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // }
  return config
}, error => { // 出现异常 
  loading.close() // 关闭加载效果 
  return Promise.reject(error);
})

// 响应拦截器 
request.interceptors.response.use(response => {
  loading.close() // 关闭加载效果
  if (response.status !== 200) {
    Message({
      message: response.message || '系统异常',
      type: 'warning',
      duration: 3 * 1000 // 停留时长 
    })
  }
  return response.data
}, error => {
  loading.close() // 关闭加载效果
  Message({
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error);
})



export default request;