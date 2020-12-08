import React from 'react'
import style from './Icon.module.scss'

/**
 * @render react
 * @name Icon component
 * @description Material svg icons. Sizing of font-size
 * @example
 * <Icon name='search' />
 */
const Icon = () => (
  <div className={style.Icon}>
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 24 24' height='24' width='24'>
      <circle fill='none' cx='12' cy='12' r='10.5' stroke-width='3' stroke='currentColor' stroke-linecap='round' />
    </svg>
  </div>
)

export default Icon
