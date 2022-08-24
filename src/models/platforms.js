import { DataTypes } from 'sequelize'
import sequelize from '../database/db.js'

const Platform = sequelize.define('platform', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

export default Platform
