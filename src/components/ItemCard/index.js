import React from 'react'
import styles from './index.module.css'

function ItemCard({ id, title, description, price, image }) {
  return (
    <div className={styles.wrapper}>
      <div className="pic">
        <img className={styles.img} src={image} alt={description} />
      </div>

      <div className={styles.lowerBar}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{`£${price}`}</div>
      </div>
    </div>
  )
}

export default ItemCard
