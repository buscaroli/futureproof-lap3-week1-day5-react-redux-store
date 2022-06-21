import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'


function CheckoutButton({text}) {
  

  return (
    <Link to="/checkout"
    role="button" 
    className={styles.wrapper}>{text}
    </Link>
    
    
  )
}

export default CheckoutButton
