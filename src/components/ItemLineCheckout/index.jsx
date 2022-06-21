import React from 'react'
import styles from './index.module.css'

function ItemLineCheckout({id, title, price}) {
  return (
    <li key={id} className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>£{price}</div>
    </li>
  )
}

export default ItemLineCheckout
