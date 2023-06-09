import React, { createContext, useContext } from 'react'
import { OrderTabs } from '../../../../configs'
import CardsPage from '../card-page'
import ItemsPage from '../items-page'
import PropTypes, { SupportOrderPanelContextInterface } from './types/props'
import styles from './styles.module.css'

export const SupportPanelContext = createContext<SupportOrderPanelContextInterface>({ currentTab: 'Card', data: [], orderData: [] })

const SupportOrderPanel: React.FC<PropTypes> = ({ onChangeCurrentTab }) => {
  const { currentTab, data, orderData } = useContext(SupportPanelContext)

  return (
    <div className='support_order_panel'>
      {
        <div className={`${(currentTab !== OrderTabs.Card && styles.hide)}`}>
          <CardsPage
            onChangeCurrentTab={onChangeCurrentTab}
            orderData={orderData}
            data={data}/>
        </div>

      }
      <div className={`${(currentTab !== OrderTabs.Order && styles.hide)}`}>
        {
          <ItemsPage
            onChangeCurrentTab={onChangeCurrentTab}
            data={data}
            orderData={orderData}
          />
        }
      </div>
    </div>
  )
}
  
export default SupportOrderPanel