import React from 'react'

const InputFieldOutline = ({ label, color }) => {
  if (!color) return null
  const _className = () => {
    switch (color) {
      case 'error':
        return { className: 'error' }
      case 'warning':
        return { className: 'warning' }
      case 'success':
        return { className: 'success' }
      default:
        return
    }
  }
  return (
    <>
      {Boolean(label) && <label {..._className()}>{label}</label>}
      <fieldset {..._className()}>
        <legend>{Boolean(label) && <span>{label}</span>}</legend>
      </fieldset>
    </>
  )
}

export default InputFieldOutline
