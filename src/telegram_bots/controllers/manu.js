import { title, list_demo, startText, createManu, createList, HelpHtmlText, deviceHtml } from '../config/index.js'
import { User, List } from '../models/index.js'
import { takeWholeList, updateOrCreate, findeID } from '../helpers/index.js'

export const startBotMessage = async (bot, chatId, message) => {

  // get user data
  const { first_name, last_name, id } = message.from
  const user_schema = {
    firstName: first_name,
    lastName: last_name,
    telegramId: id
  }

  const where = {
    where: { telegramId: id }
  }

  // the function helps to add or update data in the database
  await updateOrCreate(User, user_schema, where)
    .then(() => bot.sendMessage(chatId, title.start_text, startText))
    .catch(error => console.error('Failed to create a new record:', error))
}

export const createListMessage = (bot, chatId) => {
  return bot.sendMessage(chatId, title.chooseOption, createManu)
}

export const addNewList = (bot, chatId) => {
  return bot.sendMessage(chatId, title.add_llist_description, createList)
}

export const todoList = (bot, chatId) => {
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, title.emptyBasket, { deviceHtml })
  }
  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(list_demo))
}

export const viewAllList = async (bot, chatId) => {

  const where = {
    where: { telegramId: chatId }
  }

  await findeID(User, where)
    .then(async res => {
      const lists = await List.findAll({ where: { userId: res } })

      if (!lists) return bot.sendMessage(chatId, title.emptyBasket, { deviceHtml })
      
      return bot.sendMessage(chatId, title.chooseOption, takeWholeList(lists))
    })
}

export const helpUser = (bot, chatId) => {
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, HelpHtmlText, { parse_mode: 'HTML' })
  }
  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(list_demo))
}
