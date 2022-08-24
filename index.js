import app from './src/app.js'
import 'dotenv/config'
import sequelize from './src/database/db.js'
import './src/models/index.js'
import loadDB from './src/database/loadDB.js'

const PORT = process.env.PORT
async function main () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    await sequelize.sync({
      force: true
      // alter: true
    })
    console.log('All models were synchronized successfully.')

    await loadDB()

    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
