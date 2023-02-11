import { bot } from '../config/index.js'

import { filterSelectedItem } from '../controllers/index.js'

export const callBackMessage = (message) => {
  const data = message.data
  const chatId = message.from.id
  
  filterSelectedItem(chatId, bot, data)
}
