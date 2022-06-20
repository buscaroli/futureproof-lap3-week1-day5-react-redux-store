import React from 'react'
import { useSelector } from 'react-redux'

function ShoppingGrid() {
  const shoppingCart = useSelector((state) => state.shoppingCart)

  return <div>Shopping Items in here</div>
}

export default ShoppingGrid
