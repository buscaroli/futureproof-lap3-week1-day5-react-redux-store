import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function BackToMainButton() {
  return (
    <Link to="/" className={styles.btn}>
      Keep Shopping
    </Link>
  )
}

export default BackToMainButton
