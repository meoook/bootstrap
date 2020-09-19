import React from "react"

const InputFieldOutline = ({ label, color }) => {
  if (!color) return null
  return (
    <>
      {Boolean(label) && <label>{label}</label>}
      <fieldset>
        <legend>{Boolean(label) && <span>{label}</span>}</legend>
      </fieldset>
    </>
  )
}

export default InputFieldOutline
