import { Card } from '../../../../../custom-types'

export default interface PropTypes {
  data : Card
  // orderData: Card[]
  onAdd: (food: Card) => void
  onRemove: (food: Card) => void
}