const UserInfo = require('../userInfo')
const userInfos = require('../../users-info.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  userInfos.results.forEach((user) => {
    UserInfo.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password
    })
  })
  console.log('done creating seed data')
})