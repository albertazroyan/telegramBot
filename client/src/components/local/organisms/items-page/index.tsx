import React, { useState } from 'react'
import PropTypes from './types/props'
import { OrderTabs, AMD, btnType } from '../../../../configs'
import { calculateTotalPrice } from '../../../../helpers'
import PortalComponent from '../../molecules/portal'
import BillingPage from '../billing-page'
import Item from '../../molecules/order-item'
import styles from './styles.module.css'
import Button from '../../atoms/button'

const ItemsPage: React.FC<PropTypes> = ({ data, orderData, onChangeCurrentTab }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const editOrder = () => {
    onChangeCurrentTab(OrderTabs.Card, orderData)

  }

  console.log('data', data)
  console.log('orderData', orderData)

  const onPay = () => {
    console.log('pay')
    setIsOpen(true)
  }
  
  const onCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.header}>
            <h2>Your Order</h2>
            <span className={styles.edit} onClick={editOrder}>Edit</span>
          </div>
          <div className={styles.items}>
            {orderData.map((data) => <Item key={data.id} item={data} currency={AMD}></Item>)}
          </div>
        </div>
      </div>
      <Button
        title={`${btnType.pay} ${calculateTotalPrice(orderData, AMD)}`}
        type={btnType.pay}
        onClick={onPay} />
      <PortalComponent onClose={onCloseModal} isOpen={isOpen} title='checkout'>
        <BillingPage />
      </PortalComponent>

    </>
  )
}

export default ItemsPage