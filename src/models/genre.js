import { DataTypes } from 'sequelize'
import sequelize from '../database/db.js'

const Genre = sequelize.define('genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

export default Genre
