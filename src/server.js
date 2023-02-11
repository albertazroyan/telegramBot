import startBot from './telegram_bots/index.js'
import express from 'express'
import session from 'express-session'
import bodyParser  from 'body-parser'

startBot()

const app = express()

app.use(express.json())

app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

const port = process.env.PORT || 8080

app.listen(port, (error) => {
  error ? console.error : console.log(`Server workin: http://localhost:/${port}`)
})
