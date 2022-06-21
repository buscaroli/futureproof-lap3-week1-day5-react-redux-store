import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../state/actionCreators'
import styles from './index.module.css'

function ItemCard({ id, title, description, price, image }) {
  const dispatch = useDispatch()

  const handleAddItem = (e) => {
    e.preventDefault()

    console.log('clicked ', e.target)
    console.log('id is ', id)

    const item = {
      id,
      title,
      description,
      price,
      image,
    }

    dispatch(addItem(item))
  }

  return (
    <div role="comment" className={styles.wrapper}>
      <div className="pic">
        <img className={styles.img} src={image} alt={description} />
      </div>

      <div className={styles.lowerBar}>
        <div data-testid="cardTitle" className={styles.title}>
          {title}
        </div>
        <div className={styles.price}>{`£${price}`}</div>
      </div>

      <div onClick={handleAddItem} className={styles.floatingBtn}>
        +
      </div>
    </div>
  )
}

export default ItemCard
