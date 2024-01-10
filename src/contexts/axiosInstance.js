import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://patakparlat.szgabor-dev.hu/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;