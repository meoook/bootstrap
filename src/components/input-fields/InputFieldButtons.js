import React from 'react'
import { IcoGet } from '../icons'

const InputFieldButtons = ({ resetToggle, multiToggle, helpText }) => {
  console.log('Input buttons render')

  if (!resetToggle && !multiToggle && !helpText) return null
  return (
    <div className='input-btns'>
      {Boolean(resetToggle) && (
        <button
          tabIndex='-1'
          className='input-btns-x btn btn-ico'
          onClick={resetToggle}>
          <svg viewBox='0 0 24 24'></svg>
        </button>
      )}
      {multiToggle ? (
        <button
          tabIndex='-1'
          className='input-btns-m btn btn-ico'
          onClick={multiToggle}>
          <IcoGet name='arrdown' />
        </button>
      ) : (
        Boolean(helpText) && (
          // its not a button
          <button tabIndex='-1' className='input-btns-i btn btn-ico'>
            <svg viewBox='0 0 24 24'>
              <path d='M7 10l5 5 5-5z'></path>
            </svg>
          </button>
        )
      )}
    </div>
  )
}

export default InputFieldButtons
