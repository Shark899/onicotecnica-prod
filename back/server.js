import app from './app.js'
import mongoose from 'mongoose'
const port = process.env.PORT

const start = async () => {
  await mongoose.connect(process.env.DATABASE)
  console.log('Database connected ...')
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

start()
