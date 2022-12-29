import { Sequelize } from 'sequelize'

const { DB_NAME, DB_USER, DB_HOST, DB_DIALECT, DB_PORT } = process.env

export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  '',
  {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: true
  }
)

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('', error)
}

global.sequelize = sequelize
