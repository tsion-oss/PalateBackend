const mongoose = require('mongoose')
require('dotenv').config()

const mongoUri = process.env.MONGO_URI

mongoose
.connect(mongoUri)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

mongoose.set('strictQuery', false);

const db = mongoose.connection

module.exports = db