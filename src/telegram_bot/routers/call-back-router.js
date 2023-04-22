import {
  // LIST_MANU_ROUTE,
  bot
} from '../config/index.js'
import * as calback from '../controllers/call-backs.js'
// import { routerLocation } from './user-input-handler.js'

// define constants for routes and router locations
// const ROUTES = {
//   [LIST_MANU_ROUTE]: calback.filterSelectedItem,

// }

// Filters selected item by list ID and sends appropriate message to the chat.
export const handleCallBack = (message) => {
  const data = message.data
  const chatId = message.from.id
  
  // if (ROUTES[routerLocation]) {
  //   return ROUTES[routerLocation](chatId, bot, data)
  // }
  calback.filterSelectedItem(chatId, bot, data)
  
}

export default handleCallBack