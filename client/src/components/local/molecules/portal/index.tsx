import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from './types/props'
import styles from './styles.module.css'
  
const PortalComponent: React.FC<PropTypes> = ({ isOpen, children, onClose, title }) => {
  if (!isOpen) return null
  
  const portalRoot: HTMLElement | null  = document.getElementById('portal-root')
  
  // Create a container element for the portal content
  const container = document.createElement('div')

  useEffect(() => {
    // Append the container to the portal root element when the component mounts
    portalRoot?.appendChild(container)
  
    // Clean up the container when the component unmounts
    return () => {
      portalRoot?.removeChild(container)
    }
  }, [container, portalRoot])
  
  // Render the children inside the portal container
  return ReactDOM.createPortal(
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.close} onClick={onClose}>
            X
          </span>
          <h3>{title}</h3>
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>, container
  )
}

export default PortalComponent