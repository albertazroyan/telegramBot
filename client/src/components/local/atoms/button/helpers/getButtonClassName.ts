import { btnType } from '../../../../../configs'

const getButtonClassName = (type: string) => {
  switch (type) {
  case btnType.add:
    return btnType.add
  case btnType.remove:
    return btnType.remove
  case btnType.view_order:
    return btnType.view_order
  default:
    return ''
  }
}

export default getButtonClassName