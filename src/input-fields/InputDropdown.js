import React from 'react'

const InputField = (props) => {
  return (
    <div className='input'>
      <div className='input-wrapper'>
        <div className='input-root icon'>
          <input tabIndex='0' type='text' autoComplete='off' required />
          <label>Пароль</label>
          <div className='input-btns'>
            <button tabIndex='-1' className='input-btns-x'>
              <span className='input-icons'>
                <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                </svg>
              </span>
            </button>
            <button tabIndex='-1' className='input-btns-m'>
              <span className='input-icons'>
                <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M7 10l5 5 5-5z'></path>
                </svg>
              </span>
            </button>
          </div>
          <fieldset className='fs'>
            <legend>
              <span>Пароль</span>
            </legend>
          </fieldset>
        </div>
        <div className='input-dropdown'>
          <div>aaa</div>
          <div>bbb</div>
          <div className='active'>ccc</div>
        </div>
      </div>
    </div>
  )
}
