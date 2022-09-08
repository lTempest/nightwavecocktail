let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  bodyParser = require('body-parser')

  mongoose.Promise = global.Promise
  mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to :" + error)
  }
)

const ratingApi = require ('../back-end/routes/rating.route')
const userApi = require ('../back-end/routes/user.route')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors())

app.use('/api', ratingApi)
app.use('/connect', userApi)

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log("Connected to port: " + port)
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if(!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})