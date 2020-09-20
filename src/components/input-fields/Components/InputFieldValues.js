import React, { useEffect } from "react"
import { IcoGet } from "../../icons"

const InputFieldValues = ({ values, removeVal }) => {
  useEffect(() => {
    console.log("RENDER: Values")
  })
  if (!Boolean(values)) return null
  return (
    <>
      {values.map((item) => (
        <div key={item} className='input-value'>
          <div>{item}</div>
          <button className='btn btn-nop' onClick={removeVal.bind(this, item)}>
            <IcoGet name='close' />
          </button>
        </div>
      ))}
    </>
  )
}

export default InputFieldValues
