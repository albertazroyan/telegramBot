import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_ITEM } from '../config/index.js'

// Define a new model for the "Item" table, using Sequelize's "define" method
const Item = sequelize.define(DB_NAME_ITEM, {

  // Define the "listId" column, which is a foreign key that references the "id" column in the "Lists" table
  listId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Lists',
      key: 'id',
      allowNull: false,
    }
  },

  // Define the "name" column, which is a string and cannot be null
  name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },

  // Define the "createdAt" column, which is a timestamp and cannot be null
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },

  // Define the "updatedAt" column, which is a timestamp and cannot be null
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

export default Item