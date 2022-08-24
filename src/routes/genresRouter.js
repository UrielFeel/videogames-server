import { Router } from 'express'
import { getGenresFromApi } from '../utils/getGenres.js'

const genresRouter = Router()

genresRouter.get('/', async (req, res) => {
  try {
    return res.json(await getGenresFromApi())
  } catch (error) {
    return res.json({ error: error.message })
  }
})

export default genresRouter
