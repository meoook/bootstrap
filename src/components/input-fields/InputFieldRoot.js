import React, { useRef, useState } from 'react'
import InputFieldButtons from './InputFieldButtons'
import InputFieldIcon from './InputFieldIcon'
import InputFieldOutline from './InputFieldOutline'
import InputFieldValues from './InputFieldValues'
import InputFieldChoices from './InputFieldChoices'

const InputFieldRoot = ({
  val, // Must be set for controled input
  setVal = null, // Callback: Must be set for controled input
  vals = [], // Display multi values
  rmVal = null, // Callback: To remove value from values list
  label = '', // label with outline or placeholder
  ph = 'Введите значение',
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  choices = [], // display dropdown
  disabled = false, // disable ui control
}) => {
  const [inVal, setInVal] = useState('')
  const [displayChoices, setDisplayChoices] = useState(false)
  const inRef = useRef()

  const required = icon || vals.length ? false : true
  const placeholder = !required || !label ? ph : ''

  const finish = (e) => {
    if (onFinish && e.key === 'Enter') onFinish(inVal)
  }
  const focus = (e) => {
    // document.activeElement === dummyEl
    e.stopPropagation()
    if (inRef.current !== document.activeElement) {
      console.log('FOCUSED')
      inRef.current.focus()
    }
  }

  return (
    <div className='input' onClick={focus}>
      <div className={`input-root${icon ? ' icon' : ''}`}>
        <InputFieldValues values={vals} removeVal={rmVal} />
        <input
          tabIndex='0'
          type='text'
          autoComplete='off'
          ref={inRef}
          value={inVal}
          onChange={(e) => setInVal(e.target.value)}
          onKeyPress={finish}
          onBlur={onFinish} // TODO: check if not set
          placeholder={placeholder}
          required={required}
        />
        <InputFieldIcon icon={icon} error={Boolean(errorText)} />
        <InputFieldButtons
          resetToggle={setVal('')}
          multiToggle={() => {}}
          helpText={helpText}
        />
        <InputFieldOutline label={label} color={outColor} />
      </div>
      {Boolean(errorText) && <div className='input-error'>{errorText}</div>}
      {displayChoices && (
        <InputFieldChoices
          choices={choices}
          select={onFinish}
          loading={false}
        />
      )}
    </div>
  )
}

export default InputFieldRoot
