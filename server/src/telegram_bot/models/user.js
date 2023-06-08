import { Sequelize } from 'sequelize'
import { sequelize } from '../../database/db.js'
import { DB_NAME_USER } from '../config/index.js'

/**
This module defines the User schema for the Sequelize SQL database ORM.
It exports a Sequelize model that maps to a "users" table in the database,
with the following fields:
id: An auto-incrementing integer primary key
first_name: A non-null string that represents the user's first name
last_name: A non-null string that represents the user's last name
telegram_chat_id: A non-null string that represents the user's telegram ID
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

  // Define the "telegram_chat_id" column, which is a string and cannot be null
  telegram_chat_id: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // Define the "first_name" column, which is a string and cannot be null
  first_name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },

  // Define the "last_name" column, which is a string and cannot be null
  last_name: {
    type: Sequelize.STRING,
    // In this code, allowNull shows that the model column value cannot be null
    allowNull: false
  },

  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  language_code: {
    type: Sequelize.STRING,
    allowNull: true
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