import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AxiosConfig extends AxiosRequestConfig {
    type?: string,
    tip?: boolean
}

interface AxiosReturn extends AxiosResponse {
    config: AxiosConfig
}