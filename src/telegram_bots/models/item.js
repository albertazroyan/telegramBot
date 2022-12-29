import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_LIST } from '../config/index.js'

export const Item = sequelize.define(DB_NAME_LIST, {
  listId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  }
})