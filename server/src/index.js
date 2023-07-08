import express from 'express'
import cors from 'cors'
import http from 'node:http'
import { prisma } from '../prisma.connect.mjs'
import { Server } from 'socket.io'
import { router } from './routes/index.js'
import "dotenv/config"


//middleware
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//socket setup
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173"],
        credentials: true
    }
})

const port = process.env.PORT || 5000
httpServer.listen(port, () => console.log(`Server running on port ${port}`))

// Run when client connects
io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`)

    socket.on('send-message', (message) => {
        socket.broadcast.emit("message-from-server", message)
        console.log('Message received', message)
    });

    socket.on(('typing-started'), () => {
        socket.broadcast.emit("typing-started")
    })

    socket.on(('typing-stopped'), () => {
        socket.broadcast.emit("typing-stopped")
    })

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
})





