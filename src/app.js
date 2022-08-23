import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import videogamesRouter from './routes/videogamesRouter.js'
import genresRouter from './routes/genresRouter.js'
import platformsRouter from './routes/platformsRouter.js'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.use('/videogames', videogamesRouter)
app.use('/genres', genresRouter)
app.use('/platforms', platformsRouter)

export default app
