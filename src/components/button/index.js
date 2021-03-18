import React from 'react'
import Icon from '@bit/bazha.easyui.ico-get'
import styles from './button.module.scss'

/**
 * @render react
 * @name Button component
 * @description Text, with icon, only icon buttons. Colors and size changing with options.
 * @example
 * <Button name='search' />
 */
const Button = ({ name, icon, color, size, children }) => {
  const sumClasses = (...classes) => classes.filter((item) => !!item).join(' ')
  const colorClass = (c) => {
    if (c === 'brand') return styles.brand
    if (c === 'success') return styles.success
    if (c === 'info') return styles.info
    if (c === 'warning') return styles.warning
    if (c === 'error') return styles.error
  }
  const sizeClass = (s) => {
    if (s === 'small') return styles.small
    if (s === 'big') return styles.big
  }

  const nameClass = sumClasses(styles.btn, colorClass(color), sizeClass(size))
  return (
    <button className={nameClass}>
      {Boolean(icon) && <Icon name={name} />}
      {children}
    </button>
  )
}

export default Button
