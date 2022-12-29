import { title, list_demo, startText, createManu, createList, HelpHtmlText } from '../config/index.js'
import { User, List } from '../models/index.js'
// import { sequelize } from '../../database/connection.js';
import { takeWholeList, updateOrCreate } from '../helpers/index.js'

export const startBotMessage = async (bot, chatId, message) => {
  // get user data
  const { first_name, last_name, id } = message.from
  const user_schema = {
    firstName: first_name,
    lastName: last_name,
    telegramId: id
  }
  // const lists = await List.findAll()

  // console.log('user_schema', lists)
  const where = {
    where: { telegramId: id }
  }
  
  // the function helps to add or update data in the database
  await updateOrCreate(User, where, user_schema)
    .then(() => bot.sendMessage(chatId, title.start_text, startText))
    .catch(error => console.error('Failed to create a new record:', error))

  // User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
  // sequelize.sync().then(() => {
  //   user.create({
  //     first_name,
  //     last_name,
  //     unique: id
  //   }).then(res => {
  //     console.log(res)
  //   }).catch((error) => {
  //     console.error('Failed to create a new record : ', error);
  //   });
  //  }).catch((error) => {
  //     console.error('Unable to create table : ', error);
  //  });
  
  // return bot.sendMessage(chatId, title.start_text, startText)
}

export const createListMessage = (bot, chatId) => {
  return bot.sendMessage(chatId, title.chooseOption, createManu)
}

export const addNewList = (bot, chatId) => {
  return bot.sendMessage(chatId, title.add_llist_description, createList)
}

export const todoList = (bot, chatId) => {
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, title.emptyBasket, { parse_mode: 'HTML' })
  }
  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(list_demo))
}

export const viewAllList = async (bot, chatId) => {
  const lists = await List.findAll()

  if (!lists) return bot.sendMessage(chatId, title.emptyBasket, { parse_mode: 'HTML' })
  
  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(lists))

}

export const helpUser = (bot, chatId) => {
  if (list_demo.length === 0) {
    return bot.sendMessage(chatId, HelpHtmlText, { parse_mode: 'HTML' })
  }
  return bot.sendMessage(chatId, title.chooseOption, takeWholeList(list_demo))
}
