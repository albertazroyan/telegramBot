import { card } from '../custom-types'

const calculateTotalPrice = (calculationData: card[], currency: string) => {
  if (calculationData.length === 0) {
    return currency // Return 0 if there are no items in calculationData
  }
  
  const totalPrice = calculationData.reduce((acc, { price, quantity }) => {
    const parsedPrice = Number.parseFloat(price)
  
    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      throw new Error('Invalid price')
    }
  
    const itemTotal = quantity * parsedPrice
  
    return acc + itemTotal
  }, 0)
  
  return `${totalPrice} ${currency}`
}

export default calculateTotalPrice