import React from 'react'
import styles from './index.module.css'


function CheckoutButton({text}) {
  return (
    <div role="button" className={styles.wrapper}>{text}</div>
  )
}

export default CheckoutButton
