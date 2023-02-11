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

export const createManu = {
  reply_markup: JSON.stringify({
    keyboard: [
      [ADD_NEW_LIST, VIEW_ALL_LIST],
      [DELETE_ALL_LIST],
      [BACK_HOME_PAGE]
    ],
    resize_keyboard: true
  })
}

export const createList = {
  reply_markup: JSON.stringify({
    keyboard: [
      [VIEW_ALL_LIST],
      [BACK_HOME_PAGE]
    ],
    resize_keyboard: true
  })
}

export const createItem = {
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

export const startText = {
  reply_markup: JSON.stringify({
    keyboard: [
      [CREATE_MANU_ROUTE],
      [LIST_MANU_ROUTE]
    ],
    resize_keyboard: true
  })
}
