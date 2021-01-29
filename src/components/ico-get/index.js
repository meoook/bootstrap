import React from 'react'
import style from './icon.module.scss'
import iconArray from './icons'

/**
 * @render react
 * @name Icon component
 * @description Material svg icons. Size 1em (change fontsize to resize)
 * @example
 * <Icon name='search' />
 */
const Icon = ({ name }) => {
  const svgIcon = iconArray[name] || iconArray.close
  return <div className={style.Icon}>{svgIcon}</div>
}

export default Icon
