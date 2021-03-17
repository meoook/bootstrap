import React from 'react'
import styles from '../input.module.scss'

const InputFieldOutline = ({ label, color }) => {
  if (!color) return null
  const _className = () => {
    switch (color) {
      case 'error':
        return { className: styles.error }
      case 'warning':
        return { className: styles.warning }
      case 'success':
        return { className: styles.success }
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
