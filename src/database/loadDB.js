import { Genre, Platform } from '../models/index.js'
import { getGenresFromApi } from '../utils/getGenres.js'
import { getPlatformsFromGames } from '../utils/gentPlatforms.js'

export default async function loadDB () {
  const genres = await getGenresFromApi()
  genres.forEach(genre => {
    Genre.findOrCreate({
      where: {
        ...genre
      }
    })
  })

  const platforms = await getPlatformsFromGames()
  platforms.forEach(platform => {
    Platform.findOrCreate({
      where: {
        ...platform
      }
    })
  })

  console.log('data base loaded')
}
