import express, { urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { mainRouter } from './routes/main';

dotenv.config()

const server = express()

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

server.use('/', mainRouter)

server.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando: http://localhost:3000/')
})