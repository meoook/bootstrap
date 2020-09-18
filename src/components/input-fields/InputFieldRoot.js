import React, { useState } from 'react'
import InputFieldButtons from './InputFieldButtons'
import InputFieldIcon from './InputFieldIcon'
import InputFieldOutline from './InputFieldOutline'
import InputFieldValues from './InputFieldValues'
import InputFieldChoices from './InputFieldChoices'

const InputFieldRoot = ({
  val, // Must be set for controled input
  setVal = null, // Callback: Must be set for controled input
  vals, // Display multi values
  rmVal = null, // Callback: To remove value from values list
  label = '', // label with out or placeholder
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  choices = [], // display dropdown
  disabled = false, // disable ui control
}) => {
const [displayChoices , setDisplayChoices] = useState(false)

  const placeholder = outColor ? '' : label
  const finish = (e) => {
    if (onFinish && e.key === 'Enter') onFinish()
  }
  return (
    <div className='input'>
      <div className={`input-root${icon ? ' icon' : ''}`}>
        <InputFieldValues values={vals} removeVal={rmVal} />
        <input
          tabIndex='0'
          type='text'
          autoComplete='off'
          required
          value={'aaa'}
          onChange={(e) => setVal(e.target.value)}
          onKeyPress={finish}
          onBlur={onFinish} // TODO: check if not set
          placeholder={placeholder}
        />
        <InputFieldIcon icon={icon} error={Boolean(errorText)} />
        <InputFieldButtons
          resetToggle={setVal('')}
          multiToggle={() => {}}
          helpText={helpText}
        />
        {<InputFieldOutline label={label} color={outColor} />}
      </div>
      {Boolean(errorText) && (
        <div className='input-error'>{errorText}</div>
      )}
      {displayChoices && <InputFieldChoices choices={choices} select={}}
    </div>
  )
}

export default InputFieldRoot
