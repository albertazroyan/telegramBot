import { bot, _messageTypes, main_manu } from './config/index.js'
import menuMessage from './routers/manu_router.js'
import callBackMessage from './routers/call_back_router.js'
// import session from 'telegraf/session'
// const session = require('telegraf/session');
// import session from 'express-session'

// function helps start start bot
export const startBot = () =>  {
  // Configure express-session
  // const sessionMiddleware = session({
  //   secret: 'YOUR_SECRET_KEY',
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: { secure: true }
  // })

  // Attach session middleware to bot instance

  // bot.use(sessionMiddleware)
  // bot.use(session())

  bot.setMyCommands(main_manu)
  
  // Add an event listener for incoming messages using the 'on' method of the 'bot' object
  // This event listener uses the 'menuMessage' function to handle the incoming message
  bot.on(_messageTypes.message, menuMessage)
  
  // Add an event listener for incoming callback queries using the 'on' method of the 'bot' object
  // This event listener uses the 'callBackMessage' function to handle the incoming callback query
  bot.on(_messageTypes.callBack, callBackMessage)

}

export default startBot