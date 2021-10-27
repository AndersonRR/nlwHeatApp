import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://200.132.198.137:4000'
});