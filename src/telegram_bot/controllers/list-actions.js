import { List, User, Item } from '../models/index.js'
import { findID, updateOrCreate } from '../helpers/crud.js'
import { deviceHtml, title } from '../config/index.js'
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

    // Send success message with added list name
    return bot.sendMessage(chatId, `${title.added_new_list} /${dataValues.name}`, deviceHtml)
  } catch (error) {
    console.error('Failed to create a new record:', error)
    return bot.sendMessage(chatId, 'An error occurred while creating the list')
  }
}

// create new Item
export const newItem = async (bot, chatId, text) => {
  const { listId } = session.session

  if (text) {
    try {
      // Create a new item with provided text and list ID
      const { dataValues } = await Item.create({ name: text, listId })

      // Send success message with added item name
      return bot.sendMessage(chatId, `${title.added_new_item}: <b>${dataValues.name}</b>`, deviceHtml)
    } catch (error) {
      console.error('Failed to create a new record:', error)
    }
  }
}
