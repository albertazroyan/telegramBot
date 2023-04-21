import startBot from './telegram_bot/index.js'

startBot()

// Note: I have commented out the code for the Express server as it is not currently being used. If we need it in the future, we can easily uncomment the code and reactivate the server

/* 
  The following code sets up an Express.js server with middleware and routes. 
  Middleware functions are functions that have access to the request and response objects,
  and can perform actions on them or modify them. Express.js uses middleware functions
  to carry out various tasks such as parsing incoming requests, serving static files, and enabling session support.
*/

// import express from 'express'
// import session from 'express-session'
// import bodyParser  from 'body-parser'
// const app = express()

// app.use(express.json())

// app.use(bodyParser.json())

// app.use(express.urlencoded({ extended: true }))

// app.use(express.static('public'))

// app.use(session({
//   secret: process.env.SESSION_SECRET, // Replace with a secure secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

// const port = process.env.PORT || 8080

// app.listen(port, (error) => {
//   error ? console.error : console.log(`Server workin: http://localhost:/${port}`)
// })
