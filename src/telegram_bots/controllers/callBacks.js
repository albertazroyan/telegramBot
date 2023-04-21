import { title, createItem } from '../config/index.js'
import { Item } from '../models/index.js'
import { takeWholeList } from '../helpers/index.js'
import session from 'express-session'

export const filterSelectedItem = async (chatId, bot, id) => {
  console.log('chatId', chatId)
  
  // Use Sequelize to query the database for all items where the "listEd" property matches the "id" parameter.
  const list = await Item.findAll({ where: { listId: id } })

  // Set the session data to an object with the "id" property equal to the "id" parameter. 
  session.session = { id: id }
  
  // If the "list" array is empty, send a message to the chat with the "empty basket" title and call the "createItem"
  if (!list.length) return bot.sendMessage(chatId, title.empty_basket, createItem)
  
  // If the "list" array is not empty, send a message to the chat with the "empty_basket" title and call the "createItem" function.
  bot.sendMessage(chatId, title.empty_basket, createItem)
  
  // Send a message to the chat with the "choose_option" title and pass the "list" array to the "takeWholeList" function, which likely formats the list for display in the message.
  return bot.sendMessage(chatId, title.item_title, takeWholeList(list))

}