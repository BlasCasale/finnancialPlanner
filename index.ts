import server from './src/server'
import dotenv from 'dotenv'

import { db } from './src/db/db'
import './src/db/modeling'
dotenv.config()

const PORT = process.env.PORT ?? 8001

server.listen(PORT, async () => {
  try {
    await db.sync({ alter: true })
    console.log('Conectado')
  } catch (error) {
    console.error(error)
  }
})
