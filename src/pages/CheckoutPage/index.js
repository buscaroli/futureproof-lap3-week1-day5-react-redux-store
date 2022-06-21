import React from 'react'
import { ListBagItems } from '../../components'
import styles from './index.module.css'

function CheckoutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <ListBagItems />
      </div>
      <div className={styles.rightWrapper}>
        <div>AddressCheckout</div>
        <div>PaymentPage</div>
        <div>BackButton</div>
      </div>
    </div>
  )
}

export default CheckoutPage
