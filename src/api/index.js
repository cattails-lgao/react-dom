import axios from './ajax';
import config from './config';

export const axiosLogin = (username, password) => {
    const { url, methods } = config.login;

    return axios({ 
        url, 
        methods, 
        data: {
            username,
            password
        } 
    });
}