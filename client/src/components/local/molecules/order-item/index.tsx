import React from 'react'
import PropTypes from './types/props.d'
import styles from './styles.module.css'

const Item: React.FC<PropTypes> = ({ item, currency }) => {

  return (
    <div className={styles.item}>
      <div className={styles.photo}>
        <img src={item.imgsrc}></img>
        {/* {item.imgsrc} */}
      </div>
      <div className={styles.lable}>
        <div className={styles.title}>
          {item.title}
          <span> {item.quantity}x</span>
        </div>
        <div className={styles.description}>{item.description}</div>
        {/* {item.title} */}
      </div>
      <div className={styles.price}>{item.price} {currency}</div>
    </div>

  )
}

export default Item