import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.0.10:3434',
});

export default api;
