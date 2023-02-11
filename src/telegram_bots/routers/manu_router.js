import { LIST_MANU_ROUTE, CREATE_MANU_ROUTE, START_ROUTE, ADD_NEW_LIST, VIEW_ALL_LIST, VIEW_ALL_ITEMS, BACK_HOME_PAGE, HELP_USER, ADD_NEW_ITEM, DELETE_ALL_LIST, bot, title, list_demo } from '../config/index.js'
import { startBotMessage, createListMessage, addNewList, viewAllList, viewAllItems, helpUser, addNewItem, deleteAllList } from '../controllers/index.js'
import { takeWholeList } from '../helpers/index.js'
import typingRouter from './typing_router.js'

// find out where we were last
let routerLocation = ''

// manu routes
const handleRouter = {
  [START_ROUTE]: startBotMessage,
  [CREATE_MANU_ROUTE]: createListMessage,
  [LIST_MANU_ROUTE]: viewAllList,
  [VIEW_ALL_LIST]: viewAllList,
  [ADD_NEW_LIST]: addNewList,
  [DELETE_ALL_LIST]: deleteAllList,
  [VIEW_ALL_ITEMS]: viewAllItems,
  [ADD_NEW_ITEM]: addNewItem,
  [BACK_HOME_PAGE]: startBotMessage,
  [HELP_USER]: helpUser
}

export const menuMessage = (message) => {
  const text = message.text
  const chatId = message.from.id

  console.warn('routerLocationthe currently running route:', routerLocation)

  try {
    if (text.includes('/')) {

      routerLocation = text
      return handleRouter[text](bot, chatId, message)
    }

    typingRouter[routerLocation](bot, chatId, text)
  } catch {
    bot.sendMessage(chatId, title.basket, takeWholeList(list_demo))
  }
}
