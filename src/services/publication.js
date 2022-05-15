import Axios from '@/utils/axios'

const getPublications = async () => {
  return await Axios.get('/api/publication')
}

export default {
  getPublications,
}
