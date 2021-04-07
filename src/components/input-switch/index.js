import React from 'react'
import styles from './switch.module.scss'
import Icon from '@bit/bazha.easyui.ico-get'

const InputSwitch = ({ val = false, setVal, label = '', type = '', size = '', disabled = false }) => {
  const sumClasses = (...classes) => classes.filter((item) => !!item).join(' ')

  const typeClass = (t) => {
    if (t === 'toggle') return styles.toggle
    if (t === 'radio') return styles.radio
    if (t === 'check') return styles.check
  }
  const sizeClass = (s) => {
    if (s === 'small') return styles.small
    if (s === 'big') return styles.big
  }

  const nameClass = sumClasses(styles.switch, sizeClass(size), typeClass(type), val ? styles.active : '')

  const toogle = () => {
    if (!disabled) setVal((prev) => !prev)
  }

  return (
    <div className={nameClass} onClick={toogle} disabled={disabled}>
      <div className={styles.btn}>
        <div className={styles.mark}>{!['radio', 'toggle'].includes(type) && <Icon name='check' />}</div>
      </div>
      {label ? <label>{label}</label> : null}
    </div>
  )
}

export default InputSwitch
