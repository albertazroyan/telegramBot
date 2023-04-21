import { List, User, Item } from '../models/index.js'
import { findID, updateOrCreate } from '../helpers/crud.js'
import { deviceHtml, title } from '../config/index.js'
import session from 'express-session'

// create new List
export const newlist = (bot, chatId, text) => {

  const where = {
    where: { telegramId: chatId }
  }
  
  // Find the user ID from User model using telegramId
  findID(User, where).then(res => {
    // Check if text is not null or empty
    if (text) {
      // Create or update List with the provided text and user ID
      updateOrCreate(List, { name: text, userId: res })
        .then(res => {
          const { dataValues } = res.item

          // Send success message with added list name
          return bot.sendMessage(chatId, `${title.added_new_list} /${dataValues.name}`, deviceHtml)
        }).catch((error) => {
          console.error('Failed to create a new record:', error)
        })
    }
  })
    .catch(err => console.log(`can not find data: ${err}`))
  
}

// create new Item
export const newItem = async (bot, chatId, text) => {
  const { id } = session.session

  if (text) {
    // Create a new item with provided text and list ID
    await Item.create({ name: text, listId: id })
      .then(res => {
        const { dataValues } = res

        // Send success message with added item name
        return bot.sendMessage(chatId, `${title.added_new_item}: <b> ${dataValues.name} </b>`, deviceHtml)

      }).catch((error) => {
        console.error('Failed to create a new record:', error)
      })
  }
 
}
