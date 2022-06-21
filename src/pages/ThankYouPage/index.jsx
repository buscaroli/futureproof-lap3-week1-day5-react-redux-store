import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './index.module.css'


function ThankYouPage() {
  const userDetails = useSelector(state => state.userReducer.userDetails)
  const shoppingDetails = useSelector(state => state.shoppingReducer.shoppingCart)
  const total = shoppingDetails.reduce((acc, cur) => {return acc + parseInt(cur.price)}, 0)

  console.log('**** ', userDetails)

  return (
    <div className={styles.wrapper}>
      <div className={styles.accepted}>
        <p className={styles.paragraph}>Your Order has been Accepted!</p>
        <p className={styles.paragraph}>Thnak You for your Custom!</p>
      </div>
      <div className={styles.paid}>
        <p className={styles.paragraph}>You paid: £{total}</p>
      </div>
      <div className={styles.delivered}>
        <p className={styles.paragraph}>Your order will be delivered to:</p>
        <p className={styles.paragraph}>{`${userDetails.name} ${userDetails.surname}`}</p>
        <p className={styles.paragraph}>{`${userDetails.houseNumber}, ${userDetails.first}`}</p>
        <p className={styles.paragraph}>{`${userDetails.second}, ${userDetails.postcode}`}</p>
      </div>
      <Link to='/' className={styles.link}>Back Shopping</Link>
    </div>
  )
}

export default ThankYouPage
