import { ADD_NEW_LIST , ADD_NEW_ITEM } from '../config/index.js'
import * as typing from '../controllers/typing.js'

export const typingRouter = {
  [ADD_NEW_LIST]: typing.newlist,
  [ADD_NEW_ITEM]: typing.newItem
}

export default typingRouter
