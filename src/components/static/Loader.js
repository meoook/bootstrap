import React from 'react'
import { IcoGet } from '../icons'

const Loader = ({ name, size }) => {
  const _loaderClass = () => {
    switch (name) {
      case 'dots':
        return { className: 'loader loader-dots' }
      case 'shadow':
        return { className: 'loader loader-shadow' }
      default:
        return { className: 'loader loader-spinner' }
    }
  }

  const _styleSize = () => {
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

  if (['dots', 'shadow'].includes(name))
    return <div {..._loaderClass()} {..._styleSize()}></div>

  return (
    <div {..._loaderClass()} {..._styleSize()}>
      <IcoGet name='loader' />
    </div>
  )
}

export default Loader
