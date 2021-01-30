const express = require('express')
const router = express.Router()
const UserInfo = require('../models/userInfo')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/user_authentication', (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  UserInfo.find({ email: email, password: password })
    .lean()
    .then(user =>
      res.render('welcome', { userName: user[0].firstName }))
    .catch(error => res.render('error'))
})

module.exports = router