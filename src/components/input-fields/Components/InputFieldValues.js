import React from 'react'
import Icon from '@bit/bazha.easyui.ico-get'

const InputFieldValues = ({ values, removeVal }) => {
  if (!Boolean(values)) return null
  return (
    <>
      {values.map((item) => (
        <div key={item} className='input-value'>
          <div>{item}</div>
          <button className='btn btn-nop' onClick={removeVal.bind(this, item)}>
            <Icon name='close' />
          </button>
        </div>
      ))}
    </>
  )
}

export default InputFieldValues
