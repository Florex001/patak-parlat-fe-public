import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://91.229.245.186:8081/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;