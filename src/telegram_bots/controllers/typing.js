import { List, User, Item } from '../models/index.js'
import { findID, updateOrCreate } from '../helpers/crud.js'
import { deviceHtml, title } from '../config/index.js'

export const newlist = (bot, chatId, text) => {

  const where = {
    where: { telegramId: chatId }
  }

  findID(User, where).then(res => {
    if (text) {
      updateOrCreate(List, { name: text, userId: res })
        .then(res => {
          const { dataValues } = res.item

          return bot.sendMessage(chatId, `${title.added_new_list} /${dataValues.name}`, deviceHtml)
        }).catch((error) => {
          console.error('Failed to create a new record:', error)
        })
    }
  })
    .catch(err => console.log(`can not find data: ${err}`))
  
}

export const newItem = (bot, chatId, text) => {

  const where = {
    where: { userId: 2 }
  }

  findID(List, where).then(res => {

    if (text) {
      updateOrCreate(Item, { name: text, listId: res })
        .then(res => {
          const { dataValues } = res.item

          return bot.sendMessage(chatId, `${title.added_new_list} /${dataValues.name}`, deviceHtml)
        }).catch((error) => {
          console.error('Failed to create a new record:', error)
        })
    }
  })
    .catch(err => console.log(`can not find data: ${err}`))
  
}
