/** name of the document used to store the to do list definition */
export const START_ROUTE = '/start'
export const CREATE_MANU_ROUTE = '/ստեղծել \u{1F4DD}'
export const ADD_NEW_LIST = '/ավելացնել նոր ցուցակ \u{1F4DD}'
export const LIST_MANU_ROUTE = '/ցուցակ \u{1F4DC}'
export const VIEW_ALL_LIST = '/դիտել ամբողջ ցուցակը \u{1F4D2}'
export const BACK_HOME_PAGE = '/Վերադառնալ ԳԼԽԱՎՈՐ ԷՋ \u{1F3E0}'
export const HELP_USER = '/help'

export const DB_NAME_USER = 'user'
export const DB_NAME_LIST = 'list'

export const _messageTypes = {
  message: 'message',
  callBack: 'callback_query'
  // 'text',
  // 'animation',
  // 'audio',
  // 'channel_chat_created',
  // 'contact',
  // 'delete_chat_photo',
  // 'dice',
  // 'document',
  // 'game',
  // 'group_chat_created',
  // 'invoice',
  // 'left_chat_member',
  // 'location',
  // 'migrate_from_chat_id',
  // 'migrate_to_chat_id',
  // 'new_chat_members',
  // 'new_chat_photo',
  // 'new_chat_title',
  // 'passport_data',
  // 'photo',
  // 'pinned_message',
  // 'poll',
  // 'sticker',
  // 'successful_payment',
  // 'supergroup_chat_created',
  // 'video',
  // 'video_note',
  // 'voice',
  // 'video_chat_started',
  // 'video_chat_ended',
  // 'video_chat_participants_invited',
  // 'video_chat_scheduled',
  // 'message_auto_delete_timer_changed',
  // 'chat_invite_link',
  // 'chat_member_updated',
  // 'web_app_data',
}

// help text fot the user
export const HelpHtmlText =`
  <strong>start: ${START_ROUTE}</strong>
  <strong>ստեղծել: ${CREATE_MANU_ROUTE}</strong>
  <strong>ավելացնել նոր ցուցակ: ${ADD_NEW_LIST}</strong>
  <strong>դիտել ամբողջ ցուցակը: ${VIEW_ALL_LIST}</strong>
`

// description for the entire bot
export const title = {
  start_text: 'Ընտրեք Menu-ից',
  strat_main_manu: 'սկսեք օգտագործել բոտը/գնացեք հիմնական մենյու',
  help: 'բաց օգնություն',
  basket: 'զամբյուղ',
  add_llist_description: 'մուտքագրեք ձեր ընտրած <b> անունը՝</b> նոր ցուցակ ստեղծելու համար',
  list_type: 'մուտքագրեք ցուցակի տեսակը',
  chooseOption: 'ընտրեք նշված տարբերակներից մեկը',
  emptyBasket: '<b>Ձեր զամբյուղը դատարկ է: Խնդրում ենք ընտրել և ավելացնել ուտեստներ:</b>'
}

// main meny routes
export const main_manu = [
  { command: START_ROUTE, description: title.strat_main_manu },
  { command: HELP_USER, description: title.help }
]
// // head page manu
// export const hamburger = [
//   { command: CREATE_MANU_ROUTE, description: 'ավելացնել ուտեստներ' },
//   { command: LIST_MANU_ROUTE, description: 'տես ավելացված ուտեստների ցանկը' }
// ]

// we will remove the demo data whenever we plug the data gap
export const list_demo = []
