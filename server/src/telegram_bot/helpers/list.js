
/**
 * Create an inline keyboard using the given list of data.
 * @param {Array<{ name: string, id: number }>} list - The list of data to create the inline keyboard.
 * @returns {Object} The inline keyboard object.
*/

export const createInlineKeyboard = (list) => {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error('Invalid list parameter')
  }

  const inlineKeyboard = []
  let row = []

  for (let i = 0; i < list.length; i++) {
    const data = list[i]
    const button = { text: data.name, callback_data: data.id }

    row.push(button)

    // if we have added two buttons to the row, add it to the inlineKeyboard array and start a new row
    if (row.length === 2) {
      inlineKeyboard.push(row)
      row = []
    }
  }

  // if we have an odd number of buttons, add the last button to a new row
  if (row.length === 1) {
    inlineKeyboard.push([row[0]])
  }

  return { reply_markup: { inline_keyboard: inlineKeyboard } }
}