import { title, createItem } from '../config/index.js'
import { Item } from '../models/index.js'
import { takeWholeList } from '../helpers/index.js'
import session from 'express-session'

export const filterSelectedItem = async (chatId, bot, id) => {

  const list = await Item.findAll({ where: { listId: id } })
  
  session.session = { id: id }

  if (!list.length) return bot.sendMessage(chatId, title.empty_basket, createItem)
  
  bot.sendMessage(chatId, title.empty_basket, createItem)

  return bot.sendMessage(chatId, title.choose_option, takeWholeList(list))

}