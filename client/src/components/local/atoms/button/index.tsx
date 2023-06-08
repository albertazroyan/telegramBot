import React from 'react'
import PropTypes from './types/props'
import getButtonClassName from './helpers/getButtonClassName'
import './styles.css'

// - type: string, the type of the button ('add', 'remove', 'checkout')
// - title: string, the text to be displayed on the button
// - disable: boolean, indicates if the button is disabled
// - onClick: function, the callback function to be called when the button is clicked
const Button: React.FC<PropTypes> = ({ type, title, disable, onClick }) => {

  return (
    <button
      className={`btn ${getButtonClassName(type)}`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button