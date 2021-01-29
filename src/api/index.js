import axios from './ajax';
import config from './config';

export const axiosLogin = (username, password) => {
    const { url, methods } = config.login;
    const data = { username, password };
    
    return axios({ url, methods, data });
}