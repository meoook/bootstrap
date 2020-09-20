import React, { useEffect } from "react"
import { IcoGet } from "../../icons"

const InputFieldIcon = ({ icon, error }) => {
  useEffect(() => {
    console.log("RENDER: Icon")
  })
  if (!icon) return null
  return <div className='input-icon'>{error ? <IcoGet name='warning' /> : <IcoGet name={icon} />}</div>
}

export default InputFieldIcon
