import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv'
import intentsRoutes from './routes/intents'

const app = express()
dotenv.config()
// require('dotenv').config()
const port = 8080

app.use(bodyParser.json())

// This middleware enables CORS(Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/intents', intentsRoutes)

mongoose
  .connect(
    `mongodb+srv://sandro:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/chat?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => console.log(`Running on port ${port}`))
  })
  .catch((err) => {
    console.log(err)
  })
