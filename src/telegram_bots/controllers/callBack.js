import { title, deviceHtml } from '../config/index.js'
import { Item } from '../models/index.js'

export const filterSelectedItem = async (chatId, id, bot) => {

  const item = await Item.findOne({ where: { listId: id } })

  if (!item) return bot.sendMessage(chatId, title.emptyBasket, { deviceHtml })

  console.log('item', item)

}