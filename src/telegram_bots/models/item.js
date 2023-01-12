import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_ITEM } from '../config/index.js'

export const Item = sequelize.define(DB_NAME_ITEM, {
  listId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Lists',
      key: 'id',
      allowNull: false,
    }
  },
  name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
})