import React from 'react'
import { useState, useEffect } from 'react'
import { getItems } from '../../api/fakeStore'

function ShoppingGrid() {
  const [storeItems, setStoreItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getItems('jewelery')
      setStoreItems(data.data)
    }
    getData()
    console.log('*** list: ', storeItems)
  }, [])

  // console.log('*** list: ', storeItems)
  return (
    <ul>
      {storeItems === []
        ? 'Getting The Items from the Online Store...'
        : storeItems.map((item) => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default ShoppingGrid
