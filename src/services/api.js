import axios from 'axios';

const api = axios.create({baseURL: 'https://sharkwpbotapi.herokuapp.com'});
export default api;