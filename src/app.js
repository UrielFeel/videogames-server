import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola mundo')
})

export default app
