import { List, User, Item } from '../models/index.js'
import { findID, updateOrCreate } from '../helpers/crud.js'
import { deviceHtml, title, VIEW_ALL_LIST } from '../config/index.js'
import session from 'express-session'

// create new List
export const newlist = async (bot, chatId, text) => {
  try {
    const where = {
      where: { telegramId: chatId },
    }

    // Find the user ID from User model using telegramId
    const userId = await findID(User, where)

    // Validate the user input
    if (!text || text.length > 50) {
      return bot.sendMessage(chatId, 'Invalid list name')
    }

    // Create or update List with the provided text and user ID
    const res = await updateOrCreate(List, { name: text, userId })

    const { dataValues } = res.item
    
    console.log('data', dataValues)
    // Send success message with added list name
    return bot.sendMessage(chatId, `${title.list_created_success} <b>/${VIEW_ALL_LIST}</b>`, deviceHtml)
  } catch (error) {
    return bot.sendMessage(chatId, 'An error occurred while creating the list')
  }
}

export const newItem = async (bot, chatId, text) => {
  if (!text || !session.session) {
    return bot.sendMessage(chatId, 'Invalid input', deviceHtml)
  }

  try {
    const { id: listId } = session.session

    const newItem = { name: text, listId }
    const res = await Item.create(newItem)
    const { name } = res.dataValues

    return bot.sendMessage(chatId, `${title.item_added_success}: <b>${name}</b>`, deviceHtml)
  } catch (error) {
    console.error('Failed to create a new record:', error)
    return bot.sendMessage(chatId, 'Failed to create a new item', deviceHtml)
  }
}