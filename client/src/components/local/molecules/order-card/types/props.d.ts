import { Card } from '../../../../../custom-types'

export default interface PropTypes {
  data : Card
  currency: string
  onAdd: (food: Card) => void
  onRemove: (food: Card) => void
}