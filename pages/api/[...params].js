import { jsonplaceholderAxiosInstance } from './_util'

export default async function handler(req, res) {
  try {
    const result = await jsonplaceholderAxiosInstance.get(
      req.url.replace('/api', '')
    )
    res.send(result.data)
  } catch (e) {
    res.status(e.response.status).send(e)
  }
}
