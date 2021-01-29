import axios from './interceptors';
import { message as Message } from 'antd';

export default function ajax({ url, methods, data, config } = {}) {
    return new Promise((resolve, reject) => {
        if(!url) return Promise.reject(new Error('请求url错误', url));

        let promise;

        switch(methods) {
            case REQUESTMETHODGET:
                promise = axios.get(url, config);
                break;
            case REQUESTMETHODPOST:
                promise = axios.post(url, data, config);
                break;
        }

        promise.then(response => {
            resolve(response.data);
        }).catch(err => {
            Message.error('请求出错啦', err.message);
        })
    })
}