import React from 'react'
import { ShoppingNavbar, ShoppingGrid } from '../../components'
import styles from './index.module.css'

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <ShoppingNavbar />
      <ShoppingGrid />
    </div>
  )
}

export default MainPage
