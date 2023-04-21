import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_LIST } from '../config/index.js'

/**
 * This module defines the "List" model for a SQL database using Sequelize.
 * Represents the "List" table in the database.
 * 
 * @typedef {Object} List
 * @property {Number} userId - The ID of the user who owns the list.
 * @property {String} name - The name of the list.
 * @property {Date} createdAt - The date and time the list was created.
 * @property {Date} updatedAt - The date and time the list was last updated.
 */

/**
 * Defines the "List" model using Sequelize's "define" method.
 * 
 * @type {Sequelize.Model<List>}
 */

// Define a new model for the "List" table, using Sequelize's "define" method
const List = sequelize.define(DB_NAME_LIST, {

  // Define the "userId" column, which is a foreign key that references the "id" column in the "Users" table
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
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

export default List