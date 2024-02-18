import express from 'express'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

server.listen(3001, () => {
  console.log('listening on *:3001')
})

export default server
