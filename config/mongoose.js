const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/login-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

module.exports = db