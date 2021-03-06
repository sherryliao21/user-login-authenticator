const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const UserInfo = require('./models/userInfo')
const routes = require('./routes/index')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, (req, res) => {
  console.log('Express is listening on localhost: 3000')
})