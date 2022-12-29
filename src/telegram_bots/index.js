import { bot, _messageTypes, main_manu } from './config/index.js'
import { menuMessage } from './routers/index.js'

export const startBot = () =>  {

  bot.setMyCommands(main_manu)

  bot.on(_messageTypes.message, menuMessage)

  bot.on(_messageTypes.callBack, (msg) => {
    let data = msg.data
    let chatId = msg.message.chat.id

    console.log('message', msg)
    console.log('location', data)
    console.log('chatId', chatId)
    // list_demo.push(list_data_demo[+data])
    // if (data === '/again') {
    //   return startGame(chatId)
    // }
    // if (data === '/add') {
    //   return  bot.sendMessage(chatId, 'Enter yout phone numer');
    // }
    // if (data === HELP_USER) {
    //   return bot.sendMessage(chatId, `Congratulations, you guessed the number${data}`, againOptions);
    // }
  })
}

export default startBot