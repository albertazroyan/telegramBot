// Importing necessary modules and variables from other files
import { title, list_demo, startText, createManu, createList, HelpHtmlText, deviceHtml } from '../config/index.js'
import { User, List, Item } from '../models/index.js'
import { takeWholeList, updateOrCreate, findID } from '../helpers/index.js'
import session from 'express-session'

// Function to send a message to the user when the bot is started
export const startBotMessage = async (bot, chatId, message) => {

  // get user data
  const { first_name, last_name, id } = message.from
  const user_schema = {
    firstName: first_name,
    lastName: last_name,
    telegramId: id
  }
  
  // Find the user's data in the database, or create a new user if one does not exist
  const where = {
    where: { telegramId: id }
  }

  // the function helps to add or update data in the database
  await updateOrCreate(User, user_schema, where)
    .then(() => bot.sendMessage(chatId, title.start_text, startText))
    .catch(error => console.error('Failed to create a new record:', error))
}

// Function to prompt the user to choose an option for creating a new list
export const createListMessage = (bot, chatId) => {
  return bot.sendMessage(chatId, title.choose_option, createManu)
}

// Function to prompt the user to add a new list
export const addNewList = (bot, chatId) => {
  return bot.sendMessage(chatId, title.add_llist_description, createList)
}

// Function to prompt the user to add a new item to a list
export const addNewItem = (bot, chatId) => {
  return bot.sendMessage(chatId, title.add_item_description, createList)
}

// Function to display the user's todo list
export const todoList = (bot, chatId) => {

  // If there are no items in the list, display a message indicating that the list is empty
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, title.empty_basket, { deviceHtml })
  }

  // Display the user's todo list
  return bot.sendMessage(chatId, title.choose_option, takeWholeList(list_demo))
}

// Function to display all of the user's lists
export const viewAllList = async (bot, chatId) => {

  // Find the user's data in the database
  const where = {
    where: { telegramId: chatId }
  }

  await findID(User, where)
    .then(async res => {
      // Find all of the lists associated with the user
      const lists = await List.findAll({ where: { userId: res } })
      
      // If there are no lists associated with the user, display a message indicating that the list is empty
      if (!lists) return bot.sendMessage(chatId, title.empty_basket, { deviceHtml })
       
      // Display all of the user's lists
      return bot.sendMessage(chatId, title.choose_option, takeWholeList(lists))
    })
}

// Function to display all of the items in a list
export const viewAllItems = async (bot, chatId) => {

  if (session.session) {
    // Find all of the items in the list
    const lists = await Item.findAll({ where: { listID: session.session.id } })

    console.log('list', lists)
    // console.warn('get all items from the specifies list:', lists)
    return bot.sendMessage(chatId, title.item_title, takeWholeList(lists))
  
  }

}

export const deleteAllList = async (bot, chatId) => {
  
  // create a where object to find the user by telegramId
  const where = {
    where: { telegramId: chatId }
  }
 
  await findID(User, where)
    .then(async res => {
      console.warn('all userId should be deleted', `userID: ${res}`)
      
      // const lists = await List.destroy({ where: { id: res } })
      
    })
}

export const helpUser = (bot, chatId) => {
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, HelpHtmlText, { parse_mode: 'HTML' })
  }
  return bot.sendMessage(chatId, title.choose_option, takeWholeList(list_demo))
}
