/** name of the document used to store the to do list definition */
export const START_ROUTE = '/start'
export const CREATE_MANU_ROUTE = '/ստեղծել \u{1F4DD}'
export const ADD_NEW_LIST = '/ավելացնել նոր ցուցակ \u{1F4DD}'
export const ADD_NEW_ITEM = '/ստեղծել ցուցակի տարր \u{1F4DD}'
export const LIST_MANU_ROUTE = '/ցուցակ \u{1F4DC}'
export const VIEW_ALL_LIST = '/դիտել ամբողջ ցուցակը \u{1F4D2}'
export const DELETE_ALL_LIST = '/Ջնջել բոլոր ցուցակները \u{274C}'
export const VIEW_ALL_ITEMS = '/դիտել տվյալ ցուցակի ամբողջ տարրերը \u{1F4D2}'
export const BACK_HOME_PAGE = '/Վերադառնալ ԳԼԽԱՎՈՐ ԷՋ \u{1F3E0}'
export const HELP_USER = '/help'

export const DB_NAME_USER = 'user'
export const DB_NAME_LIST = 'list'
export const DB_NAME_ITEM = 'item'

export const _messageTypes = {
  message: 'message',
  callBack: 'callback_query'
}

// help text fot the user
export const HelpHtmlText =`
  <strong>start: ${START_ROUTE}</strong>
  <strong>ստեղծել: ${CREATE_MANU_ROUTE}</strong>
  <strong>ավելացնել նոր ցուցակ: ${ADD_NEW_LIST}</strong>
  <strong>դիտել ամբողջ ցուցակը: ${VIEW_ALL_LIST}</strong>
`

export const deviceHtml = { parse_mode: 'HTML' }

// description for the entire bot
export const title = {
  start_text: 'Ընտրեք Menu-ից',
  strat_main_manu: 'սկսեք օգտագործել բոտը/գնացեք հիմնական մենյու',
  help: 'բաց օգնություն',
  basket: 'զամբյուղ',
  added_new_list: 'ավելացել է նոր ցուցակ',
  added_new_item: 'դուք ստեղծել եք ցուցակի նոր տարր նշված անունով',
  add_llist_description: 'մուտքագրեք ձեր նախընտրած անունը՝ նոր ցուցակ ստեղծելու համար',
  add_item_description: 'մուտքագրեք ձեր նախընտրած անունը՝ նոր ցուցակի տարր ստեղծելու համար',
  list_type: 'մուտքագրեք ցուցակի տեսակը',
  choose_option: 'ընտրեք նշված ցուցակներից մեկը',
  item_title: 'Տվյալ ցուցակի բոլոր տարերը',
  empty_basket: 'Ձեր ցուցակը դատարկ է: Խնդրում ենք ընտրել - <b> /ստեղծել ցուցակի տարր </b> նոր տարր  ստեղծելու համար.'
}

// main meny routes
export const main_manu = [
  { command: START_ROUTE, description: title.strat_main_manu },
  { command: HELP_USER, description: title.help }
]

// we will remove the demo data whenever we plug the data gap
export const list_demo = []
