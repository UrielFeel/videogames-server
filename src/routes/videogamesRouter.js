import { Router } from 'express'
import getAllGames from '../utils/getAllGames.js'

const videogamesRouter = Router()

videogamesRouter.get('/', async (req, res) => {
  const { name } = req.query
  try {
    const allGames = await getAllGames(name)
    if (allGames.length === 0) {
      return res.status(404).json({ results: 0 })
    }
    return res.json(allGames)
  } catch (error) {
    return res.json({ error: error.message })
  }
})

export default videogamesRouter
