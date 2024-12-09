import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const db = new Sequelize(
  process.env.DB_NAME || 'finnalcialplanner',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    dialect: 'postgres',
    logging: false
  }
)

const connectDB = async () => {
  try {
    await db.authenticate()
    console.log('BDD sincronizada')
  } catch (e) {
    console.log(e)
  }
}

connectDB()
