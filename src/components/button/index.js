import React from 'react'
import Icon from '@bit/bazha.easyui.ico-get'
import styles from './button.module.scss'

/**
 * @render react
 * @name Button component
 * @description Text, with icon, only icon buttons. Colors and size changing with options.
 * @example
 * <Button text='search' />
 */
const Button = ({ text, icon, color, size, type, children, onClick }) => {
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
  const typeClass = (t) => {
    if (t === 'circle') return styles.circle
    if (t === 'unsized') return styles.unsized
  }

  const nameClass = sumClasses(styles.btn, colorClass(color), sizeClass(size), typeClass(type))
  return (
    <button className={nameClass} onClick={onClick}>
      {!!text || !!icon ? (
        <>
          {!!icon && <Icon name={icon} />}
          {!!text && <span>{text}</span>}
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
