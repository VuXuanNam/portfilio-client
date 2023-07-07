import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://portfolio-service-76xb.onrender.com/api'
})
export default instance