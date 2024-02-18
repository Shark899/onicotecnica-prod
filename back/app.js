import express from 'express'
import Stripe from 'stripe'
const stripe = new Stripe(
  'sk_test_51OZ8t4Dswlgz2c5ldZJEYHg8Bv7ix4NUEkvhfBDCbK6gdMoycyancUHALx9XpP8OANwAWzL0tEohqAFDxGyqsZL400SDretB6A'
)
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import { Server } from 'socket.io'
import Cors from 'cors'
import morgan from 'morgan'
import corsoRoutes from './routes/CorsoRoute.js'
import liveRoutes from './routes/LiveRoute.js'
import userRoutes from './routes/UserRoute.js'

app.use(morgan('dev'))
app.use(Cors())
app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './public/')))

// CHATTTTTTT

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`)
  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
  })
})

server.listen(3001, () => console.log('Socket Running'))

// CREATE CLIENT PORTAL

// app.post('/create-customer-portal-session', async (req, res) => {
//   const configuration = await stripe.billingPortal.configurations.create({
//     business_profile: {
//       headline: 'Cactus Practice partners with Stripe for simplified billing.',
//     },
//     features: {
//       subscription_cancel: {
//         cancellation_reason: {
//           enabled: false,
//           options: [
//             'too_expensive',
//             'missing_features',
//             'switched_service',
//             'unused',
//             'other',
//           ],
//         },
//         enabled: false,
//         mode: 'at_period_end',
//         proration_behavior: 'none',
//       },
//     },
//   })
// })

app.post('/create-portal-session', async (req, res) => {
  const { clientId } = req.body
  const session = await stripe.billingPortal.sessions.create({
    customer: clientId,
    return_url: 'http://localhost:5173/main/home',
  })
  res.status(200).json({ data: session })
})

// PAY PREMIUMMMMM
app.post('/getPayPremium', async (req, res) => {
  const { paymentMethodId, name, email } = req.body

  const customer = await stripe.customers.create({
    name,
    email,
    payment_method: paymentMethodId,
  })

  const paymentIntent = await stripe.subscriptions.create({
    currency: 'eur',
    default_payment_method: paymentMethodId,
    customer: customer.id,
    items: [
      {
        price: 'price_1Ofe7VDswlgz2c5liS91tArj',
      },
    ],
  })
  console.log(paymentIntent)
  res.json({
    clientSecret: paymentIntent.client_secret,
    clientId: paymentIntent.customer,
  })
})

// PAY PLUSSSSS
app.post('/getPayPlus', async (req, res) => {
  const { paymentMethodId, name, email } = req.body

  const customer = await stripe.customers.create({
    name,
    email,
    payment_method: paymentMethodId,
  })

  const paymentIntent = await stripe.subscriptions.create({
    currency: 'eur',
    default_payment_method: paymentMethodId,
    customer: customer.id,
    items: [
      {
        price: 'price_1Ofe72Dswlgz2c5lNVU2HjMM',
      },
    ],
  })

  res.json({
    clientSecret: paymentIntent.client_secret,
    clientId: paymentIntent.customer,
  })
})

// PAY BASEEEE
app.post('/getPayBase', async (req, res) => {
  const { paymentMethodId, name, email } = req.body

  const customer = await stripe.customers.create({
    name,
    email,
    payment_method: paymentMethodId,
  })

  const paymentIntent = await stripe.subscriptions.create({
    currency: 'eur',
    default_payment_method: paymentMethodId,
    customer: customer.id,
    items: [
      {
        price: 'price_1Ofe6cDswlgz2c5lkTWLaM3q',
      },
    ],
  })
  console.log(paymentIntent)
  res.json({
    clientSecret: paymentIntent.client_secret,
    clientId: paymentIntent.customer,
  })
})

app.use('/api/v1/course', corsoRoutes)
app.use('/api/v1/live', liveRoutes)
app.use('/api/v1/user', userRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/', 'index.html'))
})

export default app
