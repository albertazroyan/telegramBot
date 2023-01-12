import { bot, _messageTypes, main_manu } from './config/index.js'
import { menuMessage, callBackMessage } from './routers/index.js'

export const startBot = () =>  {

  bot.setMyCommands(main_manu)

  bot.on(_messageTypes.message, menuMessage)

  bot.on(_messageTypes.callBack, callBackMessage)
}

export default startBot