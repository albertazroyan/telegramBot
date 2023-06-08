// import necessary modules and variables
import {
  LIST_MANU_ROUTE,
  CREATE_MANU_ROUTE,
  START_ROUTE, ADD_NEW_LIST,
  VIEW_ALL_LIST,
  VIEW_ALL_ITEMS,
  BACK_HOME_PAGE,
  HELP_USER, ADD_NEW_ITEM,
  DELETE_ALL_LIST,
  DELETE_ALL_ITEMS,
  bot,
  title
} from '../config/index.js'
import * as manu from '../controllers/user-Interaction.js'
import * as typing from '../controllers/list-actions.js'
import { createInlineKeyboard } from '../helpers/index.js'

// keep track of where the user is in the menu
let routerLocation = ''

// define constants for routes and router locations
const ROUTES = {
  [START_ROUTE]: manu.startBotMessage,
  [CREATE_MANU_ROUTE]: manu.createListMessage,
  [LIST_MANU_ROUTE]: manu.viewAllList,
  [VIEW_ALL_LIST]: manu.viewAllList,
  [ADD_NEW_LIST]: manu.addNewList,
  [DELETE_ALL_LIST]: manu.deleteAllLists,
  [VIEW_ALL_ITEMS]: manu.viewAllItems,
  [DELETE_ALL_ITEMS]:manu.deleteAllItems,
  [ADD_NEW_ITEM]: manu.addNewItem,
  [BACK_HOME_PAGE]: manu.startBotMessage,
  [HELP_USER]: manu.helpUser
}

// define typing routes for specific routes
const typingCommands = {
  [ADD_NEW_LIST]: typing.newlist,
  [ADD_NEW_ITEM]: typing.newItem
}

// const values = Object.keys(ROUTES)

export const  handleUserInput = (message) => {
  const text = message.text
  const chatId = message.from.id
  
  try {
    // if the message contains a valid route command, change the router location and execute the handler for that command
    if (ROUTES[text]) {

      routerLocation = text
      return ROUTES[text](bot, chatId, message)
    }
    
    // if the message doesn't contain a valid route command, execute the handler for the current router location
    typingCommands[routerLocation](bot, chatId, text)
  } catch {
    // if an error occurs, send the user back to the home page with an error message
    bot.sendMessage(chatId, title.cart_label, createInlineKeyboard([]))
  }
}

// export { routerLocation }

export default  handleUserInput
