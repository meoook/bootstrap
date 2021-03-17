import React from 'react'
import { IcoGet } from '../icons'
import style from './button.module.scss'

/**
 * @render react
 * @name Button component
 * @description Material svg icons. Size 1em (change fontsize to resize)
 * @example
 * <Button name='search' />
 */
const Button = ({ name, icon, color, size, children }) => {
  const nameClass = ['btn']
  return <button className={nameClass.join(' ')}>{children}</button>
}

export default Button
