import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://doublem.com/php'
});

export default instance;