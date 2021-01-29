import axios from 'axios';
import { ProRequestURL, DevRequestURL } from './config';
import { message as Message } from 'antd';

let baseURL = '';
// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    baseURL = DevRequestURL;
} else if (process.env.NODE_ENV == 'debug') {    
    baseURL = DevRequestURL;
} else if (process.env.NODE_ENV == 'production') {    
    baseURL = ProRequestURL;
}

const instance = axios.create({
    baseURL
});


// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        config.headers['token'] = '111';
        return config;
    }, 
    function (error) {
        // 对请求错误做些什么
        Message.error('请求错误');
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response;
    }, 
    function (error) {
        // 对响应错误做点什么
        Message.error('响应错误');
        return Promise.reject(error);
    }
);


export default instance;