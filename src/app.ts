import express from 'express'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import intentsRoutes from './routes/intents'

const app = express()
dotenv.config()

app.use(bodyParser.json())

// This middleware enables CORS(Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/intents', intentsRoutes)

export default app
