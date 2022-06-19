import React from 'react'
import { Title } from '../../components'
import styles from './index.module.css'

function Header() {
  return (
    <div className={styles.wrapper}>
      <Title title='Redux Shop' />
    </div>
  )
}

export default Header
