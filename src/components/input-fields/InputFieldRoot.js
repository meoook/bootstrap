import React from 'react'
import InputFieldButtons from './InputFieldButtons'

const InputFieldRoot = ({
  val, // Must be set for controled input
  setVal, // Must be set for controled input
  label = 'Введите значение', // label with out or placeholder
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outLine = true, // with outline border & label control
  onFinish = null, // onBlur or keyEnter Callback
  choices = [], // to display dropdown
}) => {
  return (
    <div className='input-wrapper'>
      <div className='input-root icon btns'>
        <input tabIndex='0' type='text' autoComplete='off' required />
        <label>Название</label>
        <InputFieldButtons resetToggle={} multiToggle={} helpText={helpText} />
        <fieldset>
          <legend>
            <span>Название</span>
          </legend>
        </fieldset>
      </div>
      <div className='input-error'>This is error text</div>
      <div className='input-choices'>This is error text</div>
    </div>
  )
}

export default InputFieldRoot
