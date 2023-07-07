import express from 'express'
import cors from 'cors'
import http from 'node:http'
import { prisma } from './prisma.connect.mjs'
import { Server } from 'socket.io'
import "dotenv/config"



const app = express()
app.use(cors())
app.use(express.json())


const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173"],
        credentials: true
    }
})

const port = process.env.PORT || 5000
httpServer.listen(port, () => console.log(`Server running on port ${port}`))

app.get('/', (req, res) => {
    res.send("Hellooooo")
})

// Run when client connects
io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`)

    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
})




