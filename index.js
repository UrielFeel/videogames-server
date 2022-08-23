import app from './src/app.js'
import 'dotenv/config'

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
