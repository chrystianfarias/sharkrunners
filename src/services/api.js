import axios from 'axios';

const api = axios.create({baseURL: 'https://api.sharkrunners.com.br/'});
export default api;