import React from 'react'
import styles from '../input.module.scss'

const InputFieldError = ({ text }) => {
  if (!Boolean(text)) return null
  return <div className={styles.errorMsg}>{text}</div>
}

export default InputFieldError
