import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/connection.js'
import { DB_NAME_USER } from '../config/index.js'

/**
This module defines the User schema for the Sequelize SQL database ORM.
It exports a Sequelize model that maps to a "users" table in the database,
with the following fields:
id: An auto-incrementing integer primary key
firstName: A non-null string that represents the user's first name
lastName: A non-null string that represents the user's last name
telegramId: A non-null string that represents the user's telegram ID
createdAt: A non-null timestamp that represents the creation time of the user record
updatedAt: A non-null timestamp that represents the last update time of the user record
@module User
*/

// Define the User model schema
const User = sequelize.define(DB_NAME_USER, {
  // Define the "id" column, which is the primary key and auto-incrementing
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  // Define the "firstName" column, which is a string and cannot be null
  firstName: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },

  // Define the "lastName" column, which is a string and cannot be null
  lastName: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },

  // Define the "telegramId" column, which is a string and cannot be null
  telegramId: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // Define the "createdAt" column, which is a timestamp and cannot be null
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

  // Define the "updatedAt" column, which is a timestamp and cannot be null
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

export default User