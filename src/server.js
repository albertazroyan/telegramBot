import startBot from './telegram_bots/index.js'
import express from 'express'
import { bot, title, createManu } from './telegram_bots/config/index.js'
import session from 'express-session'
import bodyParser  from 'body-parser'

const app = express()

app.use(express.json())

app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(session({
  secret: 'mysecret', // Replace with a secure secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
console.log('session', session.session)
app.get('/', async (req, res) => {
  console.log('req', req)
  bot.sendMessage(5541035735, title.choose_option, createManu)
  res.send('helo')
})
// console.log('session', session.session = {name: 'sss'})
startBot()

const port = process.env.PORT || 8080

app.listen(port, (error) => {
  error ? console.error : console.log(`Server workin: http://localhost:/${port}`)
})
