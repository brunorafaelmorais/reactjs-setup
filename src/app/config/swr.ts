import api from '../services/api'

export default {
  fetcher: (url: string): Promise<any> => api.get(url).then(res => res.data)
}
