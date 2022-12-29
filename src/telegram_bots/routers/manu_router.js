import { LIST_MANU_ROUTE, CREATE_MANU_ROUTE, START_ROUTE, ADD_NEW_LIST, VIEW_ALL_LIST, BACK_HOME_PAGE, HELP_USER, bot, title, list_demo } from '../config/index.js'
import { startBotMessage, createListMessage, addNewList, viewAllList, helpUser } from '../controllers/index.js'
import { takeWholeList } from '../helpers/index.js'
import typingRouter from './typing_router.js'

// find out where we were last
let routerLocation = ''

// manu routes
const handleRouter = {
  [START_ROUTE]: startBotMessage,
  [CREATE_MANU_ROUTE]: createListMessage,
  [LIST_MANU_ROUTE]: viewAllList,
  [ADD_NEW_LIST]: addNewList,
  [VIEW_ALL_LIST]: viewAllList,
  [BACK_HOME_PAGE]: startBotMessage,
  [HELP_USER]: helpUser
}

export const menuMessage = (message) => {
  const text = message.text
  const chatId = message.from.id

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
