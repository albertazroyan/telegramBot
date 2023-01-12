
export const takeWholeList = (list) => {
  
  return list && { reply_markup: JSON.stringify({
    inline_keyboard: list.map((data) => [{ text: data.name, callback_data:  data.id }])
  })

  }
}
