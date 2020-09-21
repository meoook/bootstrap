import React from 'react'
import { IcoGet } from '../../icons'

const InputFieldValues = ({ values, removeVal }) => {
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
