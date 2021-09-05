import axios from 'axios'
import { AxiosConfig, AxiosReturn } from '../types/axios'

const request = axios.create({
    timeout: 60 * 1000,
    baseURL: window.$config.github
})

request.interceptors.request.use((config: AxiosConfig) => {
    config.baseURL = window.$config[config.type || 'github']
    const token = 'test'
    if (config.type === 'backen') {
        config.headers.token = token
    }
    if (config.method === 'get') {
        config.params = Object.assign({}, config.params, { t: new Date().getTime() })
    }
    if (config.url?.toLowerCase().startsWith('download')) {
        config.responseType = 'blob'
    }
    if (config.url?.toLowerCase().startsWith('upload')) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
}, error => Promise.reject(error))

request.interceptors.response.use((response: AxiosReturn) => {
    const { data, config, headers } = response
    if (headers['content-disposition']) {
        return Promise.resolve({ headers, data })
    }
    if (data.success || data.code === 200) {
        if (config.tip) {
            alert('测试消息')
        }
        return Promise.resolve(data.result || data)
    } else {
        return Promise.reject(data)
    }
}, async error => {
    const { config } = error
    if (!config || !config.retry) {
        return Promise.reject(error)
    } else {
        config.$rcount = config.$rcount || 0
        if (config.$rcount >= config.retry) {
            return Promise.reject(error)
        }
        config.$rcount += 1
        await new Promise((resolve) => setTimeout(resolve, config.delay || 1))
        request(config)
    }
})

export default request