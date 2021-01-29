import React from 'react'
import style from './icons.module.scss'
import iconArray from './icons'

// TODO: Check work as not components
/**
 * @render react
 * @name Icons component
 * @description Material svg icons. Size 1em (change fontsize to resize)
 * @example
 * <Icons name='search' />
 */
const svgProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', height: '24', width: '24' }

const Icons = ({ name }) => {
  const svgIcon = iconArray[name] || iconArray.close
  console.log('ICON HERE', svgIcon)
  return (
    <div className={style.Icon}>
      <svg {...svgProps}>{svgIcon}</svg>
    </div>
  )
}

export default Icons
