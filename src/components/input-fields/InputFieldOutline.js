import React from 'react'

const InputFieldOutline = ({ label, color }) => {
  if (!color) return null
  return (
    <>
      <label>{label ? label : 'Введите значение'}</label>
      <fieldset>
        <legend>
          <span>{label ? label : 'Введите значение'}</span>
        </legend>
      </fieldset>
    </>
  )
}

export default InputFieldOutline
