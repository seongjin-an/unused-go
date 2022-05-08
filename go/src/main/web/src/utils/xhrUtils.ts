import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
/*
 본 모듈은 매번 axios 요청 시
 겹치는 부분을 기본 URL, axios 헤더, 에러 처리 등을 공통으로 처리하고자 작성되었다.
 이런 경우 요청할 때, 응답을 받을 때 인터셉터를 사용해서 중간에 가로채 공통으로 처리할 수 있다.
 인터셉터는 요청하기 직전, 응답을 받고 the, catch로 처리 직전에 가로챌 수 있다.
 */
export const xhr: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/unused-go',
    timeout: 3000
})
// 요청 인터셉터, 2개의 콜백 함수를 받는다.
xhr.interceptors.request.use(
    (config: AxiosRequestConfig)=> {
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)
// 응답 인터샙터, 2개의 콜백함수르 받는다.
xhr.interceptors.response.use(
    (response:AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)