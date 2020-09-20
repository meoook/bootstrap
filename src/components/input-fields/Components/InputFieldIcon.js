import React from "react"
import { IcoGet } from "../../icons"

const InputFieldIcon = ({ icon, error }) => {
  if (!icon) return null
  return <div className='input-icon'>{error ? <IcoGet name='warning' /> : <IcoGet name={icon} />}</div>
}

export default InputFieldIcon
