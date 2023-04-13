// import necessary modules and variables
import { LIST_MANU_ROUTE, CREATE_MANU_ROUTE, START_ROUTE, ADD_NEW_LIST, VIEW_ALL_LIST, VIEW_ALL_ITEMS, BACK_HOME_PAGE, HELP_USER, ADD_NEW_ITEM, DELETE_ALL_LIST, bot, title, list_demo } from '../config/index.js'
import * as manu from '../controllers/manu.js'
import { takeWholeList } from '../helpers/index.js'
import typingRouter from './typing_router.js'

// keep track of where the user is in the menu
let routerLocation = ''

// define handlers for menu routes
const handleRouter = {
  [START_ROUTE]: manu.startBotMessage,
  [CREATE_MANU_ROUTE]: manu.createListMessage,
  [LIST_MANU_ROUTE]: manu.viewAllList,
  [VIEW_ALL_LIST]: manu.viewAllList,
  [ADD_NEW_LIST]: manu.addNewList,
  [DELETE_ALL_LIST]: manu.deleteAllList,
  [VIEW_ALL_ITEMS]: manu.viewAllItems,
  [ADD_NEW_ITEM]: manu.addNewItem,
  [BACK_HOME_PAGE]: manu.startBotMessage,
  [HELP_USER]: manu.helpUser
}

// handle menu messages
export const menuMessage = (message) => {
  const text = message.text
  const chatId = message.from.id

  console.warn('routerLocationthe currently running route:', routerLocation)

  try {
    // if the message contains a valid route command, change the router location and execute the handler for that command
    if (text.includes('/')) {

      routerLocation = text
      return handleRouter[text](bot, chatId, message)
    }
    
    // if the message doesn't contain a valid route command, execute the handler for the current router location
    typingRouter[routerLocation](bot, chatId, text)
  } catch {
    // if an error occurs, send the user back to the home page with an error message
    bot.sendMessage(chatId, title.basket, takeWholeList(list_demo))
  }
}
