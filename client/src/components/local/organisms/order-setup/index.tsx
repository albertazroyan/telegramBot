import React, { useMemo, useState } from 'react'
import SupportPanel from '../support-panel'
import { card } from '../../../../custom-types'
import { SupportPanelContext } from '../support-panel/index'

let counter = 0
const multipliedData: Array<card> = Array.from({ length: 100 }, () => ({
  title: 'Խորոված հավ',
  weight: 220,
  description: 'Տեղական հավի մսից խորոված՝ կարտոֆիլով, սխտորի սոուսով և լավաշով։',
  imgsrc: 'https://cdn.foody.am/products/2022/08/24/1661321559.jpg.webp550',
  price: '4500 ',
  quantity : 0,
  id: new Date().toISOString() + counter++
}))

const OrderSetup: React.FC = () => {
  const [currentAssetIds, setCurrentAssetIds] = useState<string>('Card')
  const [orderData, setOrdertems] = useState<Array<card>>([])

  const supportPanelContext = useMemo(() => {
    return {
      currentTab: currentAssetIds,
      data: multipliedData,
      orderData: orderData
    }
  }, [currentAssetIds, multipliedData, orderData])

  // console.log('orderData', orderData)
 
  const onChangeCurrentTab = (tabs: string, orderData: Array<card>) => {
    setCurrentAssetIds(tabs)
    setOrdertems(orderData)
  }

  return (
    <div className='orderSetup'>
      <SupportPanelContext.Provider value={supportPanelContext}>
        <SupportPanel onChangeCurrentTab={onChangeCurrentTab} />
      </SupportPanelContext.Provider>
    </div>
  )
}
  
export default OrderSetup