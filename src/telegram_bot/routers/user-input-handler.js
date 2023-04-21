import { bot } from '../config/index.js'
import * as calback from '../controllers/call-backs.js'

// Filters selected item by list ID and sends appropriate message to the chat.
export const handleCallBack = (message) => {
  const data = message.data
  const chatId = message.from.id
  
  calback.filterSelectedItem(chatId, bot, data)
}

export default handleCallBack