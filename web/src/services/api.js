import axios from 'axios';

const api = axios.create({
	baseURL: 'http://172.16.9.26:3434',
});

export default api;
