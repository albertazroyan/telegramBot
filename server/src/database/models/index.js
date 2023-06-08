// eslint-disable-next-line strict
'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const process = require('process')

// Get the name of the current file
const basename = path.basename(__filename)

// Get the current environment (default is 'development')
const env = process.env.NODE_ENV || 'development'

// Load the configuration for the current environment from config.json
const config = require(__dirname + '/../config/config.json')[env]

// Create an empty object to hold the models
const db = {}

let sequelize

// Create a new Sequelize instance with the loaded configuration
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

// Read all the files in this directory and load any that end in '.js' as Sequelize models
fs
  .readdirSync(__dirname)
  .filter(file => {
    // Ignore any files that start with '.' (e.g. '.DS_Store') or are the current file
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

    db[model.name] = model
  })

// Set up associations between the models if the associate method is defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Add the Sequelize instance and class to the db object
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
