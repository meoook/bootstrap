import React, { useEffect } from "react"

const InputFieldError = ({ text }) => {
  useEffect(() => {
    console.log("RENDER: Error")
  })
  if (!Boolean(text)) return null
  return <div className='input-error'>{text}</div>
}

export default InputFieldError
