import { bot } from '../config/index.js'
import * as calback from '../controllers/callBacks.js'

export const callBackMessage = (message) => {
  const data = message.data
  const chatId = message.from.id
  
  calback.filterSelectedItem(chatId, bot, data)
}
