import { card } from '../../../../../custom-types'

export default interface PropTypes {
  onChangeCurrentTab: (currentTab: string, orderData: card[]) => void,

}

export type SupportOrderPanelContextInterface = {
    currentTab: string
    data: card[],
    orderData: card[]
}