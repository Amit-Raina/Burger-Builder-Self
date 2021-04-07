import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-badb1-default-rtdb.firebaseio.com/'
});

export default instance;