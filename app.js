const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/login-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('error')
})
db.once('open', () => {
  console.log('Mongoose connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

// app.post('/', (req, res) => {
// })

app.listen(3000, (req, res) => {
  console.log('Express is listening on localhost: 3000')
})