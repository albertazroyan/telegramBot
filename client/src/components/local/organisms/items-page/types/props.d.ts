import { card } from '../../../../../custom-types'

export default interface PropTypes {
  onChangeCurrentTab: (currentTab: string, orderData: card[]) => void,
  data: card[]
  orderData: card[]
}