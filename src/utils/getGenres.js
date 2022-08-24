import axios from 'axios'
import 'dotenv/config'

const endPoint = 'https://api.rawg.io/api/genres'
const { API_KEY } = process.env

export async function getGenresFromApi () {
  const response = await axios(`${endPoint}?key=${API_KEY}`)
  const formatData = response.data.results?.map(gen => ({
    id: gen.id,
    name: gen.name
  }))
  return formatData
}
