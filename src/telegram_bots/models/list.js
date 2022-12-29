import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_LIST } from '../config/index.js'

export const List = sequelize.define(DB_NAME_LIST, {
  userId: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },
})