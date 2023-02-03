import { title, deviceHtml } from '../config/index.js'
import { Item } from '../models/index.js'
import { takeWholeList } from '../helpers/index.js'

export const filterSelectedItem = async (chatId, id, bot) => {

  const list = await Item.findAll({ where: { listId: id } })
  
  if (!list.length) return bot.sendMessage(chatId, title.emptyBasket, deviceHtml)

  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(list))

}