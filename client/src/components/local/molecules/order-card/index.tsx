import React, { useState } from 'react'
import PropTypes from './types/props'
import { btnType } from '../../../../configs'
import Button from '../../atoms/button'
import styles from './styles.module.css'

const Card: React.FC<PropTypes> = ({ data, onAdd, onRemove, currency }) => {
  const [count, setCount] = useState(0)
  const { title, imgsrc, price } = data
  
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    onAdd(data)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
      onRemove(data)
    }
  }

  return (
    <div className={styles.card}>
      <span
        className={count !== 0 ? styles.badge : styles.hidden}
      >
        {count}
      </span>
      <div className={styles.image}>
        <img src={imgsrc} />
      </div>
      <span className={styles.title}>
        {title} . <span className={styles.price}> {price} {currency}</span>
      </span>

      <div className={styles.btnContainer}>
        <Button title={'+'} type={btnType.add} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={'-'} type={btnType.remove} onClick={handleDecrement} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card