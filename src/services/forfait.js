import Axios from '@/utils/axios'

const getForfaits = async () => {
  return await Axios.get('/api/forfait')
}

export default {
  getForfaits,
}
