import api from '../services/api'

export const swrConfig = {
  fetcher: (url: string): Promise<any> => api.get(url).then(res => res.data)
}
