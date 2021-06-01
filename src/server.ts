import app from './app'
import mongoose from 'mongoose'

const port = 8080

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Running on port ${port}`))
  })
  .catch((err) => {
    console.log(err)
  })
