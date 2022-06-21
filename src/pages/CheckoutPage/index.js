import React from 'react'
import { ListBagItems } from '../../components'
import AddressCheckout from '../../components/AddressCheckout'
import styles from './index.module.css'

function CheckoutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <ListBagItems />
      </div>
      <div className={styles.rightWrapper}>
        <AddressCheckout />

        <div>BackButton</div>
      </div>
    </div>
  )
}

export default CheckoutPage
