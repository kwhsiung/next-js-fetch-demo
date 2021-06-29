import axios from 'axios'

export const fetcher = (url, page = 1, limit = 20) => {
  return axios
    .get(url, { params: { _page: page, _limit: limit } })
    .then((res) => res.data)
}
