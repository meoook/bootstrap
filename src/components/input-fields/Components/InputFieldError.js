import React from "react"

const InputFieldError = ({ text }) => {
  if (!Boolean(text)) return null
  return <div className='input-error'>{text}</div>
}

export default InputFieldError
