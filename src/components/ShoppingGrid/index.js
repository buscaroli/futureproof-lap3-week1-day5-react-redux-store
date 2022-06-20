import React from 'react'
import { useSelector } from 'react-redux'

function ShoppingGrid() {
  const balance = useSelector((state) => state.balance)

  return <div>Balance: {balance}</div>
}

export default ShoppingGrid
