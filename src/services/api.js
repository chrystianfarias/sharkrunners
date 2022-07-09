import axios from 'axios';

const api = axios.create({baseURL: 'https://sharkrunnersapi.herokuapp.com/'});
export default api;