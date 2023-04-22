import { bot, _messageTypes, main_manu } from './config/index.js'
import  handleUserInput from './routers/user-input-handler.js'
import handleCallBack from './routers/call-back-router.js'

// function helps start start bot
export const startBot = () =>  {

  bot.setMyCommands(main_manu)
  
  // Add an event listener for incoming messages using the 'on' method of the 'bot' object
  // This event listener uses the 'menuMessage' function to handle the incoming message
  bot.on(_messageTypes.message,  handleUserInput)
  
  // Add an event listener for incoming callback queries using the 'on' method of the 'bot' object
  // This event listener uses the 'callBackMessage' function to handle the incoming callback query
  bot.on(_messageTypes.callBack, handleCallBack)

}

export default startBot