import React from 'react'
import { useState, useEffect } from 'react'
import { getItems } from '../../api/fakeStore'
import { ItemCard } from '../index'

import styles from './index.module.css'

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
    <ul className={styles.wrapper}>
      {/* {storeItems === []
        ? 'Getting The Items from the Online Store...'
        : storeItems.map((item) => <li key={item.id}>{item.title}</li>)} */}
      {storeItems === []
        ? 'Getting The Items from the Online Store...'
        : storeItems.map((item) => (
            <li key={item.id}>
              <ItemCard
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            </li>
          ))}
    </ul>
  )
}

export default ShoppingGrid
