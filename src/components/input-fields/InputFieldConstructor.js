import React from 'react'

const InputFieldConstructor = ({
  val, // Must be set for controled input
  setVal, // Must be set for controled input
  label = 'Введите значение', // label with out or placeholder
  icon = '', // icon name before text
  error = '', // error text (out - red)
  help = '', // help text onHover info Icon
  out = false, // with outline border & label control
  onFinish = null, // onBlur or keyEnter Callback
  choices = [], // to display dropdown
}) => {
  return (
    <div className='input'>
      <div className='input-wrapper'>
        <div className='input-root icon btns'>
          <input tabIndex='0' type='text' autoComplete='off' required />
          <label>Название</label>
          <div className='input-btns'>
            <button tabIndex='-1' className='input-btns-x'>
              <span className='input-icons'>
                <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                </svg>
              </span>
            </button>
            <button tabIndex='-1' className='input-btns-i'>
              <span className='input-icons'>
                <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M7 10l5 5 5-5z'></path>
                </svg>
              </span>
            </button>
          </div>
          <fieldset>
            <legend>
              <span>Название</span>
            </legend>
          </fieldset>
        </div>
        <div className='input-error'>This is error text</div>
        <div className='input-choices'>This is error text</div>
      </div>
    </div>
  )
}

export default InputBasic
