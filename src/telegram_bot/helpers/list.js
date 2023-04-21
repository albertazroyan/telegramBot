
/**
 * Create an inline keyboard using the given list of data.
 * @param {Array<{ name: string, id: number }>} list - The list of data to create the inline keyboard.
 * @returns {Object} The inline keyboard object.
*/
export const createInlineKeyboard = (list) => {
  // if (!Array.isArray(list) || list.length === 0) {
  //   throw new Error('Invalid list parameter')
  // }

  const inlineKeyboard = list.map((data) => [{ text: data.name, callback_data:  data.id }])

  return { reply_markup: { inline_keyboard: inlineKeyboard } }
}
