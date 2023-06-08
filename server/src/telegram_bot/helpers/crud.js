
// This function adds or updates data in the database
export const updateOrCreate = async (model, newItem, filter) => {
  try {
    // Try to find the record that matches the filter
    const [item, created] = await model.upsert(newItem, { where: filter })

    // Return the item and a flag indicating whether it was created or updated
    return { item, created }
  } catch (err) {
    // If an error occurs, log the error and return null
    console.error(err)
    return null
  }
}

// the function helps find id
export const findID = async (model, where) => {
  // First try to find the record
  const findeItem = await model.findOne(where)

  return findeItem.dataValues.id
}
