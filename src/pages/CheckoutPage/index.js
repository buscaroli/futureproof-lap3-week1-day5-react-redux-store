import React from 'react'
import { ListBagItems } from '../../components'
import styles from './index.module.css'

function CheckoutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <ListBagItems />
        {/* <div>ListBagItems</div> */}
        <div>ListBagTotal</div>
      </div>
      <div className={styles.rightWrapper}>
        <div>Address</div>
        <div>PaymentPage</div>
        <div>BackButton</div>
      </div>
    </div>
  )
}

export default CheckoutPage
