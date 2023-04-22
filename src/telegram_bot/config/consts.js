/** name of the document used to store the to do list definition */
export const START_ROUTE = '/start'
export const CREATE_MANU_ROUTE = '/ստեղծել \u{1F4DD}'
export const ADD_NEW_LIST = '/ավելացնել նոր ցուցակ \u{1F4DD}'
export const ADD_NEW_ITEM = '/ստեղծել ցուցակի տարր \u{1F4DD}'
export const LIST_MANU_ROUTE = '/ցուցակ \u{1F4DC}'
export const VIEW_ALL_LIST = '/դիտել ամբողջ ցուցակը \u{1F4D2}'
export const DELETE_ALL_LIST = '/Ջնջել բոլոր ցուցակները \u{274C}'
export const DELETE_ALL_ITEMS = '/Ջնջել բոլոր տարրերը \u{274C}'
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
Բարի գալուստ մեր To-Do List Bot:

Բոտն օգտագործելու համար մուտքագրեք «/start» կամ սեղմեք «/start» կոճակը ստորև:

Եթե ցանկանում եք ստեղծել անելիքների նոր ցուցակ, մուտքագրեք «/ստեղծել \u{1F4DD}» կամ սեղմեք «Ստեղծել ցուցակ» կոճակը:

Ցանկ ունենալուց հետո կարող եք նոր տարրեր ավելացնել դրան՝ մուտքագրելով «/ստեղծել ցուցակի տարր \u{1F4DD}» կամ սեղմելով «Ավելացնել նյութ» կոճակը։

Ձեր ցուցակի բոլոր կետերը դիտելու համար մուտքագրեք «/դիտել ամբողջ ցուցակը \u{1F4D2}» կամ սեղմեք «Դիտել ցուցակը» կոճակը:

Եթե ցանկանում եք ջնջել կոնկրետ տարր, օգտագործեք «/remove»-ը, որին հաջորդում է առաջադրանքի համարը: Օրինակ, «/remove 2»-ը կհեռացնի ձեր ցուցակի երկրորդ առաջադրանքը:

Ամբողջ ցուցակը մաքրելու համար մուտքագրեք «/Ջնջել բոլոր ցուցակները \u{274C}» կամ սեղմեք «Ջնջել բոլորը» կոճակը։

Եթե ունեք հարցեր կամ լրացուցիչ օգնության կարիք ունեք, կապվեք մեր աջակցման թիմի հետ [insert contact information] հասցեով:

Շնորհակալություն մեր To-Do List Bot-ն օգտագործելու համար:
`

export const deviceHtml = { parse_mode: 'HTML' }

// description for the entire bot
export const title = {
  menu_instructions: 'Ընտրեք Menu-ից',
  main_menu_prompt: 'սկսեք օգտագործել բոտը/գնացեք հիմնական մենյու',
  help_button_label: 'բաց օգնություն',
  cart_label: 'զամբյուղ',
  list_created_success: 'Դուք հաջողությամբ ավելացրել եք նոր ցուցակ \u{2705} , ցուցակների համափարփակ ցանկը դիտելու համար սեղմեք',
  item_added_success: 'դուք ստեղծել եք ցուցակի նոր տարր նշված անունով',
  new_list_placeholde: 'մուտքագրեք ձեր նախընտրած անունը՝ նոր ցուցակ ստեղծելու համար',
  new_item_placeholder: 'մուտքագրեք ձեր նախընտրած անունը՝ նոր ցուցակի տարր ստեղծելու համար',
  list_category_label: 'մուտքագրեք ցուցակի տեսակը',
  list_selector_label: 'Ձեր բոլոր ցուցակներն այստեղ են, ընտրեք տրված ցուցակներից մեկը.',
  menu_option_selector_label: 'Ընտրեք հետևյալ Menu-երից մեկը',
  list_items_label: 'Տվյալ ցուցակի բոլոր տարերը',
  items_deleted_successfully: `ցուցակի բոլոր տարիները հաջողությամբ ջնջվել են \u{2705}. նոր տարրեր ավելացնելու համար ընտրեք ${ADD_NEW_ITEM} `,
  empty_cart_message: 'Ձեր ցուցակը դատարկ է: Խնդրում ենք ընտրել - <b> /ստեղծել ցուցակի տարր </b> նոր տարր  ստեղծելու համար.'
}

// main meny routes
export const main_manu = [
  { command: START_ROUTE, description: title.main_menu_prompt },
  { command: HELP_USER, description: title.help_button_label }
]
