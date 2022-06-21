import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useSelector } from 'react-redux'
import ItemLineCheckout from '../ItemLineCheckout'
import styles from './index.module.css'

function ListBagItems() {
  const items = useSelector(state => state.shoppingReducer.shoppingCart)
  const totalPrice = items.reduce((acc, cur) => {return acc + parseInt(cur.price)}, 0)
  
  
  const renderItems = items.length > 0 ? items.map(item => <ItemLineCheckout id={item.id} title={item.title} price={item.price}/>) : <li>Bag is Empty</li>

  return (
    <ul className={styles.wrapper}>
      {renderItems}
      <ItemLineCheckout id={0} title={'TOTAL:'} price={totalPrice}/>
    </ul>
  )
}

export default ListBagItems
