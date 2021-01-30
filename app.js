const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/login-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
const UserInfo = require('./models/userInfo')

db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/user_authentication', (req, res) => {
  const email = req.query.email
  const password = req.query.password
  UserInfo.find({ email: email, password: password })
    .lean()
    .then(user =>
      res.render('welcome', { userName: user[0].firstName }))
    .catch(error => res.redirect('/'))
})

app.listen(3000, (req, res) => {
  console.log('Express is listening on localhost: 3000')
})