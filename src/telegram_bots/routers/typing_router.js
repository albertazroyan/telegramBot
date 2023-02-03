import { ADD_NEW_LIST , ADD_NEW_ITEM } from '../config/index.js'
import { newItem, newlist } from '../controllers/index.js'

export const typingRouter = {
  [ADD_NEW_LIST]: newlist,
  [ADD_NEW_ITEM]: newItem
}

export default typingRouter
