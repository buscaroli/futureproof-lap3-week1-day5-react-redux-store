import React from 'react'
import { Title, CheckoutButton } from '../../components'
import styles from './index.module.css'

function Header() {
  return (
    <div className={styles.wrapper}>
      <Title title='Redux Shop' />
      <CheckoutButton text='Bag'/>
    </div>
  )
}

export default Header
