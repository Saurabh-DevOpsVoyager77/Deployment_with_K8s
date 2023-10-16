import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.58.2:32080/',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;
