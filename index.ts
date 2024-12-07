import server from './src/server'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ?? 8001

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto local ${PORT}`)
})
