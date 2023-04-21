// Import constants related to routes and options from the configuration file
import {
  LIST_MANU_ROUTE,
  CREATE_MANU_ROUTE,
  ADD_NEW_LIST,
  VIEW_ALL_LIST,
  DELETE_ALL_LIST,
  VIEW_ALL_ITEMS,
  BACK_HOME_PAGE,
  ADD_NEW_ITEM
} from '../config/index.js'

// Keyboard layout object for the "createManu" reply markup, which includes options related to adding, viewing, and deleting lists.
export const createMenuKeyboardLayout = {
  reply_markup: JSON.stringify({
    keyboard: [
      [ADD_NEW_LIST, VIEW_ALL_LIST],
      [DELETE_ALL_LIST],
      [BACK_HOME_PAGE]
    ],
    resize_keyboard: true
  })
}

// Keyboard layout object for the "createList" reply markup, which includes options related to viewing lists and going back to the home page.
export const createListKeyboardLayout = {
  reply_markup: JSON.stringify({
    keyboard: [
      [VIEW_ALL_LIST],
      [BACK_HOME_PAGE]
    ],
    resize_keyboard: true
  })
}

// Keyboard layout object for the "createItem" reply markup, which includes options related to adding new items, viewing all items, and going back to the home page.
export const createItemKeyboardLayout = {
  reply_markup: {
    keyboard: [
      [{ text: ADD_NEW_ITEM, callback_data: '1000' , hide_keyboard: true } , VIEW_ALL_ITEMS],
      [BACK_HOME_PAGE],
    ],
    one_time_keyboard: true,
    resize_keyboard: true
  },
  parse_mode: 'HTML'
}

// Keyboard layout object for the "startText" reply markup, which includes options for creating a menu or viewing an existing menu.
export const startTextKeyboardLayout = {
  reply_markup: JSON.stringify({
    keyboard: [
      [CREATE_MANU_ROUTE],
      [LIST_MANU_ROUTE]
    ],
    resize_keyboard: true
  })
}
