import React from 'react'
import Icon from '../../ico-get/index.js'
import styles from '../input.module.scss'

const InputFieldIcon = ({ icon, error }) => {
  if (!icon) return null
  return <div className={styles.icon}>{error ? <Icon name='warning' /> : <Icon name={icon} />}</div>
}

export default InputFieldIcon
