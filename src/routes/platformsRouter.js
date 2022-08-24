import { Router } from 'express'
import { getPlatformsFromGames } from '../utils/gentPlatforms.js'

const platformsRouter = Router()

platformsRouter.get('/', async (req, res) => {
  try {
    res.json(await getPlatformsFromGames())
  } catch (error) {
    return res.json({ error: error.message })
  }
})

export default platformsRouter
