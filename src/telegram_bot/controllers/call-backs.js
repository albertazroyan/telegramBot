import { title, createItemKeyboardLayout } from '../config/index.js'
import { Item } from '../models/index.js'
import { createInlineKeyboard } from '../helpers/index.js'
import session from 'express-session'

export const filterSelectedItem = async (chatId, bot, id) => {
  
  // Use Sequelize to query the database for all items where the "listEd" property matches the "id" parameter.
  const list = await Item.findAll({ where: { listId: id } })

  // Set the session data to an object with the "id" property equal to the "id" parameter. 
  session.session = { id: id }

  // console.log('session.session', session.session)
  // If the "list" array is empty, send a message to the chat with the "empty basket" title and call the "createItem"
  if (!list.length) return bot.sendMessage(chatId, title.empty_cart_message, createItemKeyboardLayout)
    
  // Send a message to the chat with the "choose_option" title and pass the "list" array to the "takeWholeList" function, which likely formats the list for display in the message.
  return bot.sendMessage(chatId, title.list_items_label, createInlineKeyboard(list))

}