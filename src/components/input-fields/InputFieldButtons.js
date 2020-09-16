import React from 'react'

const InputFieldButtons = ({ resetToggle, multiToggle, helpText }) => {
  if (!resetToggle && !multiToggle && !helpText) return null
  // TODO: REMOVE SPAN input-icons and check without btn class
  return (
    <div className='input-btns'>
      {Boolean(resetToggle) && (
        <button
          tabIndex='-1'
          className='input-btns-x btn btn-ico'
          onClick={resetToggle}>
          <span className='input-icons'>
            <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
            </svg>
          </span>
        </button>
      )}
      {multiToggle ? (
        <button
          tabIndex='-1'
          className='input-btns-m btn btn-ico'
          onClick={multiToggle}>
          <span className='input-icons'>
            <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M7 10l5 5 5-5z'></path>
            </svg>
          </span>
        </button>
      ) : (
        Boolean(helpText) && (
          // its not a button
          <button tabIndex='-1' className='input-btns-i btn btn-ico'>
            <span className='input-icons'>
              <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M7 10l5 5 5-5z'></path>
              </svg>
            </span>
          </button>
        )
      )}
    </div>
  )
}

export default InputFieldButtons
