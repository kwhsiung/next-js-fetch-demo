import axios from 'axios'
const jsonplaceholderAxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
})
export const fetcher = (url, page = 1, limit = 20) => {
  return jsonplaceholderAxiosInstance
    .get(url, { params: { _page: page, _limit: limit } })
    .then((res) => res.data)
}
