import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'

function ListBagItems() {
  const items = useSelector(state => state.shoppingReducer.shoppingCart)
  console.log('************',items)
  
  const renderItems = items !== undefined ? items.map(item => <li key={item.id}> {item.title.slice(0,40)} <span >£ {item.price}</span></li> ) : <li>Bag is Empty</li>

  return (
    <ul className={styles.wrapper}>
      {renderItems !== [] ? renderItems : <li>Bag is Empty</li>}
      {/* <li>Bag is Empty</li> */}
    </ul>
  )
}

export default ListBagItems
