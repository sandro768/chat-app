import request from 'supertest'
import mongoose from 'mongoose'
import app from '../src/app'

describe('Test the /intents endpoint', () => {
  // connect to the DB
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  // close the connection
  afterAll(async () => {
    await mongoose.connection.close()
  })

  test('It should give us a json response the POST method', () => {
    return request(app)
      .post('/intents')
      .send({
        botId: '5f74865056d7bb000fcd39ff',
        message: 'Brilliant! Thanks!',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
