const mongoose = require('mongoose')
const UserInfo = require('../userInfo')
const db = mongoose.connection
const userInfos = require('../../users-info.json')


mongoose.connect('mongodb://localhost/login-authentication', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  console.log('Mongoose connected!')
  userInfos.results.forEach((user) => {
    UserInfo.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password
    })
  })
  console.log('done creating seed data')
})