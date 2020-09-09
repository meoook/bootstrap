import React from 'react'

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

  const styleSize = () => {
    switch (size) {
      case 1:
        return { fontSize: '20px' }
      case 2:
        return { fontSize: '30px' }
      case 3:
        return { fontSize: '40px' }
      default:
        return { fontSize: 'inherit' }
    }
  }

  return <div className={loaderClass()} style={styleSize()}></div>
}

export default Loader
