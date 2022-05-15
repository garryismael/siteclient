import axios from 'axios'

const baseURL = 'https://app-webcup.herokuapp.com'

const instance = axios.create({
    baseURL,
})

const token = localStorage.getItem('token')
if (token && token !== '') { instance.defaults.headers.common.Authorization = `Bearer ${token}` }

export default instance
