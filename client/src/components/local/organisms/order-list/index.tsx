import React from 'react'
import PropTypes from './types/props'
import { OrderTabs } from '../../../../configs'

// import Button from '../../atoms/button'

// import './styles.css'

// let counter = 1

// const multipliedData: Array<card> = Array.from({ length: 100 }, () => ({
//   title: 'Խորոված հավ',
//   weight: 220,
//   description: 'Տեղական հավի մսից խորոված՝ կարտոֆիլով, սխտորի սոուսով և լավաշով։',
//   imgsrc: 'https://cdn.foody.am/products/2022/08/24/1661321559.jpg.webp550',
//   price: '4,500 ֏',
//   quantity : 0,
//   id: new Date().toISOString() + counter++
// }))

const OrderList: React.FC<PropTypes> = ({ data, orderData, onChangeCurrentTab }) => {
  // const [cartItems, setCartItems] = useState<Array<card>>([])

  // const onAdd = (food: card) => {
  //   const exist = cartItems.find((x) => x.id === food.id)
  
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
  //       )
  //     )
  //   } else {
  //     setCartItems([...cartItems, { ...food, quantity: 1 }])
  //   }
  // }
  
  // const onRemove = (food: card) => {
  //   const exist = cartItems.find((x) => x.id === food.id)
    
  //   if (exist && exist.quantity === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== food.id))
  //   } else if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
  //       )
  //     )
  //   }
  // }

  // const viewOrder = () => {
  //   console.log('hello')
  //   // onChangeCurrentTab('Card')
  // }

  const viewOrder = () => {
    onChangeCurrentTab(OrderTabs.Card, orderData)

  }

  console.log('data', data)
  console.log('orderData', orderData)

  return (
    <>
      <div className="order_List__container">
         Order List
        {orderData.map((data) => data.title)}
        <button onClick={viewOrder}></button>
      </div>
    </>
  )
}

export default OrderList