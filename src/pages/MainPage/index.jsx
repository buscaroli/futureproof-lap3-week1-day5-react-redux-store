import React from 'react'
import { ShoppingNavbar } from '../../components'
import styles from './index.module.css'

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <ShoppingNavbar />
      <div>ShoppingGrid</div>
    </div>
  )
}

export default MainPage
