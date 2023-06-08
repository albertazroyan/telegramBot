import { Sequelize } from 'sequelize'

// Get the values of the environment variables.
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT, DB_PORT } = process.env

// Create a new Sequelize instance with the provided credentials.
const sequelize = new Sequelize(
  DB_NAME,  // The name of the database.
  DB_USER,  // The username for the database.
  DB_PASS,  // The password for the database.
  {
    host: DB_HOST,  // The host name for the database server.
    dialect: DB_DIALECT,  // The type of database being used.
    port: DB_PORT,  // The port number for the database server.
    logging: true   // Whether or not to log SQL queries to the console.
  }
)

// Try to authenticate the connection to the database.
try {
  await sequelize.authenticate()   // Use the authenticate() method of the Sequelize instance.
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export { sequelize }
