import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://magaze-backend.herokuapp.com',
});

export default axiosInstance
