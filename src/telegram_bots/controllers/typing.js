import { title } from '../config/index.js'
import { sequelize } from '../../database/connection.js'
import { List } from '../models/index.js'

let collect_info = {}

export const newlist = (bot, chatId, text) => {

  if (!collect_info.name) {
    collect_info.name = text
    return bot.sendMessage(chatId, title.list_type, { parse_mode: 'HTML' })
  } else if (!collect_info.type) {
    collect_info.type = text
    sequelize.sync().then(() => {
      List.create(collect_info).then(res => {
        collect_info = {}
        return bot.sendMessage(chatId, `շնորհակալություն ցուցակի անունն է /${res.name}`, { parse_mode: 'HTML' })
      }).catch((error) => {
        console.error('Failed to create a new record : ', error)
      })
    }).catch((error) => {
      console.error('Unable to create table : ', error)
    })
    return bot.sendMessage(chatId, 'ձեր ցուցակը պատրաստ է', { parse_mode: 'HTML' })
  }
}
