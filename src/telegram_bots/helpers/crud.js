
// the function helps to add or update data in the database
export const updateOrCreate = async (model, newItem, where) => {
  // First try to find the record
  if (where) {
    const foundItem = await model.findOne({ ...where })

    if (!foundItem) {
      // Item not found, create a new one
      const item = await model.create(newItem)

      return { item, created: true }
    }
    // Found an item, update it
    const item = await model.update(newItem, { ...where })

    return { item, created: false }
  }
  
  console.log('newItem', item)
  // Item not found, create a new one
  const item = await model.create(newItem)

  return { item, created: true }

}

// the function helps find id
export const findID = async (model, where) => {
  // First try to find the record
  const findeItem = await model.findOne(where)

  return findeItem.dataValues.id
}
