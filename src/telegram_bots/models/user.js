import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_USER } from '../config/index.js'

export const User = sequelize.define(DB_NAME_USER, {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },
  telegramId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})