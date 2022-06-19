import React from 'react'
import styles from './index.module.css'

function Title({title}) {
  return (
    <h1 className={styles.wrapper}>{title}</h1>
  )
}

export default Title
