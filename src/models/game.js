import { DataTypes } from 'sequelize'
import sequelize from '../database/db.js'

const Game = sequelize.define('game', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  released: {
    type: DataTypes.DATEONLY
  },
  image: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.FLOAT
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  database: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: false
})

export default Game
