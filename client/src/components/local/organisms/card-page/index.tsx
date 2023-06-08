import React, { useEffect, useState } from 'react'
import Card from '../../molecules/order-card'
import Button from '../../atoms/button'
import { card } from '../../../../custom-types'
import { OrderTabs, btnType } from '../../../../configs'
import PropTypes from './types/props'
import styles from './styles.module.css'

const CardPage: React.FC<PropTypes> = ({
  onChangeCurrentTab,
  data,
  orderData
}) => {
  const [cardItems, setCardItems] = useState<Array<card>>(orderData)
  const [cardData, setCardData] = useState<Array<card>>(data)
 
  useEffect(()=> {
    setCardData(data)
  }, [data])
  
  const onAdd = (food: card) => {
    const existingIndex = cardItems.findIndex((x) => x.id === food.id)
  
    if (existingIndex !== -1) {
      const updatedItems = [...cardItems]

      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: updatedItems[existingIndex].quantity + 1,
      }
      setCardItems(updatedItems)
    } else {
      setCardItems((prevCardItems) => [...prevCardItems, { ...food, quantity: 1 }])
    }
  }

  console.log('cardItems', cardItems)
  
  const onRemove = (food: card) => {
    const existingIndex = cardItems.findIndex((x) => x.id === food.id)
  
    if (existingIndex !== -1) {
      const existingItem = cardItems[existingIndex]
  
      if (existingItem.quantity === 1) {
        setCardItems((prevCardItems) =>
          prevCardItems.filter((x) => x.id !== food.id)
        )
      } else {
        const updatedItems = [...cardItems]

        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        }
        setCardItems(updatedItems)
      }
    }
  }
  
  const viewOrder = () => {
    onChangeCurrentTab(OrderTabs.Order, cardItems)

  }

  return (
    <>
      <div className={styles.container} >
        { cardData.map((data) => {
          return (
            <Card
              key={data.id}
              data={data}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          )}
        )}
        {
          cardItems.length !== 0 && <Button
            title={'view order'}
            type={btnType.view_order}
            onClick={viewOrder} />
        }
      </div>
    </>
  )
}

export default CardPage