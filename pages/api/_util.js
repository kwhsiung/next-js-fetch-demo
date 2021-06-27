import axios from 'axios'

export const jsonplaceholderAxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
})
