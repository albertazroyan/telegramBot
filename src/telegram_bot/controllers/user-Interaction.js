// Importing necessary modules and variables from other files
import {
  title,
  startTextKeyboardLayout,
  createMenuKeyboardLayout,
  createListKeyboardLayout,
  createItemKeyboardLayout,
  HelpHtmlText,
  deviceHtml
} from '../config/index.js'
import { User, List, Item } from '../models/index.js'
import { createInlineKeyboard, updateOrCreate, findID } from '../helpers/index.js'
import session from 'express-session'

// Function to send a message to the user when the bot is started
export const startBotMessage = async (bot, chatId, message) => {
  // Get user data
  const { first_name, last_name, id } = message.from
  const user_schema = {
    firstName: first_name,
    lastName: last_name,
    telegramId: id
  }
  
  // Find the user's data in the database, or create a new user if one does not exist
  const where = { where: { telegramId: id } }

  try {
    await updateOrCreate(User, user_schema, where)
    await bot.sendMessage(chatId, title.menu_instructions, startTextKeyboardLayout)
  } catch (error) {
    console.error('Failed to create a new record:', error)
  }
}

// Function to display all of the user's lists
export const viewAllList = async (bot, chatId) => {
  try {
    // Find the user's data in the database
    const where = { where: { telegramId: chatId } }
    const id  = await findID(User, where)

    // Find all of the lists associated with the user
    const lists = await List.findAll({ where: { userId: id } })
    
    // If there are no lists associated with the user, display a message indicating that the list is empty
    if (!lists) return bot.sendMessage(chatId, title.empty_cart_message, { deviceHtml })
     
    // Display all of the user's lists
    await bot.sendMessage(chatId, title.list_selector_label, createInlineKeyboard(lists))
  } catch (error) {
    console.error('Failed to display all lists:', error)
  }
}

// This function displays all of the items in a list
export const viewAllItems = async (bot, chatId) => {
  // Get the active list from the session
  const list = session.session

  // If no active list is found, log a message and return
  if (!list) {
    console.log('No active session found')
    return
  }

  try {
    // Find all items in the active list
    const items = await Item.findAll({ where: { listID: list.id } })

    // If no items are found, send a message to the user and return
    if (!items || !items.length) {
      await bot.sendMessage(chatId, title.empty_cart_message, { deviceHtml })
      return
    }

    // Send a message to the user with the list of items
    return bot.sendMessage(chatId, title.list_items_label, createInlineKeyboard(items))
    
  } catch (err) {
    // If an error occurs, log the error and send a message to the user
    console.error(err)
    await bot.sendMessage(chatId, 'An error occurred while retrieving items from the list')
  }
}

export const deleteAllItems = async (bot, chatId) => {
  try {
    // Find the user based on their Telegram ID
    const user = await User.findOne({ where: { telegramId: chatId } })

    if (!user) {
      console.log(`User with telegramId ${chatId} not found.`)
      return
    }

    // Find the list belonging to the user that is currently active in the session
    const list = await List.findOne({
      where: {
        userId: user.id,
        id: session.session?.id // Use optional chaining to safely access session.session.id
      }
    })

    if (!list) {
      console.log(`List not found for user with telegramId ${chatId} and list ID ${session.session?.id}.`)
      return
    }

    // Delete all items associated with the list
    await Item.destroy({ where: { listId: list.id } })
   
    return bot.sendMessage(chatId, `<b>${list.name}</b> ${title.items_deleted_successfully}`, createItemKeyboardLayout)

  } catch (error) {
    console.error('An error occurred:', error)
  }
}

// export const deleteAllList = async (bot, chatId) => {
  
//   // create a where object to find the user by telegramId
//   const where = { telegramId: chatId }
 
//   // find the user using the where object
//   const user = await User.findOne({ where })

//   console.log('user', user.dataValues.id)
//   // if the user is found, remove all of their lists and items
//   if (user && user.dataValues.id) {
//     await List.destroy({ where: { userId:  user.dataValues.id } })
    
//     // console.log('user', users)
//     // console.log('All lists deleted for user:', user.id)

//     // await Item.destroy({ where: { userId: user.id } })
//     // console.log('All items deleted for user:', List.id)

//     // // finally, remove the user
//     // await user.destroy()
//     // console.log('User deleted:', user.id)
//   }
// }

export const helpUser = (bot, chatId) => {
  return bot.sendMessage(chatId, HelpHtmlText, { parse_mode: 'HTML' })
}

// Function to prompt the user to choose an option for creating a new list
export const createListMessage = (bot, chatId) => {
  return bot.sendMessage(chatId, title.menu_option_selector_label, createMenuKeyboardLayout)
}

// Function to prompt the user to add a new list
export const addNewList = (bot, chatId) => {
  return bot.sendMessage(chatId, title.new_list_placeholde, createListKeyboardLayout)
}

// Function to prompt the user to add a new item to a list
export const addNewItem = (bot, chatId) => {
  return bot.sendMessage(chatId, title.new_item_placeholder, createListKeyboardLayout)
}
