import { bot, _messageTypes, main_manu } from './config/index.js'
import  handleUserInput from './routers/user-input-handler.js'
import handleCallBack from './routers/call-back-router.js'

// function helps start start bot
export const startBot = () =>  {

  // const webAppurl = 'https://earnest-khapse-74851d.netlify.app/'

  // // Send a custom keyboard with a web app button
  // const sendWebAppKeyboard = (chatId) => {
  //   const keyboard = {
  //     keyboard: [[{ text: 'Web App', url: web_link }]],
  //     resize_keyboard: true,
  //     one_time_keyboard: true,
  //   }

  //   bot.sendMessage(chatId, 'Welcome! Click the button below to open the web app.', {
  //     reply_markup: JSON.stringify(keyboard),
  //   })
  // }
  
  // // Listen for /start command
  // bot.onText(/\/start/, (msg) => {
  //   const chatId = msg.chat.id

  //   sendWebAppKeyboard(chatId)
  // })

  // bot.on('message', async (msg) => {
  //   const chatId = msg.chat.id
  //   const text = msg.text
    
  //   if (text === '/start1') {
  //     await bot.sendMessage(chatId, 'click', {
  //       reply_markup: {
  //         keyboard: [
  //           [{ text: 'zapomnit' }]
  //         ]
  //       }
  //     })

  //     await bot.sendMessage(chatId, 'Hayk jan Click ara stex kbaci im sarqac web (React) application@', {
  //       reply_markup: {
  //         inline_keyboard: [
  //           [{ text: 'sdelat zakaz', web_app: { url: webAppurl } }]
  //         ]
  //       }
  //     })
  //   }
  //   // send a message to the chat acknowledging receipt of their message
  //   bot.sendMessage(chatId, 'Received your message')
  // })

  bot.setMyCommands(main_manu)
  
  // Add an event listener for incoming messages using the 'on' method of the 'bot' object
  // This event listener uses the 'menuMessage' function to handle the incoming message
  bot.on(_messageTypes.message,  handleUserInput)
  
  // Add an event listener for incoming callback queries using the 'on' method of the 'bot' object
  // This event listener uses the 'callBackMessage' function to handle the incoming callback query
  bot.on(_messageTypes.callBack, handleCallBack)

}

export default startBot