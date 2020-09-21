import React from 'react'
import { IcoGet } from '../icons'

const Loader = ({ name, size }) => {
  const loaderClass = () => {
    switch (name) {
      case 'dots':
        return 'loader loader-dots'
      case 'shadow':
        return 'loader loader-shadow'
      default:
        return 'loader loader-spinner'
    }
  }
  if (name === 'svg')
    return (
      <div className='loader loader-svg'>
        <IcoGet name='loader' />
      </div>
    )

  const styleSize = () => {
    switch (size) {
      case 1:
        return { style: { fontSize: '20px' } }
      case 2:
        return { style: { fontSize: '30px' } }
      case 3:
        return { style: { fontSize: '40px' } }
      default:
        return
    }
  }

  return <div className={loaderClass()} {...styleSize()}></div>
}

export default Loader
