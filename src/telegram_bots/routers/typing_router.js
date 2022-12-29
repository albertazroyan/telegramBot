import { ADD_NEW_LIST } from '../config/index.js'
import { newlist } from '../controllers/index.js'

export const typingRouter = {
  [ADD_NEW_LIST]: newlist
}

export default typingRouter
