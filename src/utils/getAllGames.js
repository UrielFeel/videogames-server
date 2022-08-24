import axios from 'axios'
import 'dotenv/config'

export const endPoint = 'https://api.rawg.io/api/'
const { API_KEY } = process.env

function dataFormat (data) {
  return data.map(g => {
    return ({
      id: g.id,
      name: g.name,
      released: g.released,
      image: g.background_image,
      rating: g.rating,
      platforms: g.platforms?.map(p => ({
        name: p.platform.name,
        id: p.platform.id
      })),
      genres: g.genres?.map(gen => ({
        name: gen.name,
        id: gen.id
      }))
    })
  })
}

const getGamesFromAPI = async (name) => {
  let gamesApi = []
  let response
  console.log(`${endPoint}games?key=${API_KEY}`)
  if (!name) response = await axios(`${endPoint}games?key=${API_KEY}`)

  else response = await axios(`${endPoint}games?key=${API_KEY}&search=${name}`)

  while (gamesApi.length < 100) {
    if (!response.data.next) {
      gamesApi = [...gamesApi, ...dataFormat(response.data.results)]
      return gamesApi
    }
    gamesApi = [...gamesApi, ...dataFormat(response.data.results)]
    response = await axios(response.data.next)
  }
  return gamesApi
}

const getAllGames = async (name) => {
  const fromAPI = await getGamesFromAPI(name)
  return [...fromAPI]
}

export default getAllGames
