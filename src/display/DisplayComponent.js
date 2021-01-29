import React from 'react'

const DisplayComponent = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid white',
        marginBottom: '5px',
        lineHeight: '1.1',
      }}>
      <div style={{ fontSize: '16px' }}>Tz{children}Xx</div>
      <div style={{ fontSize: '24px' }}>Tz{children}Xx</div>
      <div style={{ fontSize: '32px' }}>Tz{children}Xx</div>
      <div style={{ fontSize: '40px' }}>Tz{children}Xx</div>
    </div>
  )
}

export default DisplayComponent
