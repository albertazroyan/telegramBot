import { List, User, Item } from '../models/index.js'
import { findID, updateOrCreate } from '../helpers/crud.js'
import { deviceHtml, title } from '../config/index.js'
import session from 'express-session'

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

export const newItem = async (bot, chatId, text) => {
  const { id } = session.session

  if (text) {
    await Item.create({ name: text, listId: id })
      .then(res => {
        const { dataValues } = res

        return bot.sendMessage(chatId, `${title.added_new_item}: <b> ${dataValues.name} </b>`, deviceHtml)

      }).catch((error) => {
        console.error('Failed to create a new record:', error)
      })
  }
 
}
