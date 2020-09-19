import React, { useRef, useState } from 'react'
import InputFieldButtons from './InputFieldButtons'
import InputFieldIcon from './InputFieldIcon'
import InputFieldOutline from './InputFieldOutline'
import InputFieldValues from './InputFieldValues'
import InputFieldChoices from './InputFieldChoices'

const InputTextFieldWrapper = ({
  children, // Here must be input field ot input field with values - [val, ... , input]
  label = '', // label with outline or placeholder
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onActive = null, // Callback: when clicked on field aria (set focus or display choices)
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  choicesToggleRef = false, // Ref: Toggler to display choices
  choices = [], // Choices for dropdown list if not set - display "no variants"
  loading = false, // State for field loading (choices and icon)
  disabled = false, // disable ui control
}) => {
  const handeReset = (e) => {
    e.stopPropagation()
    onFinish('')
  }

  return (
    <div className='input' onClick={onActive}>
      <div className={`input-root${icon ? ' icon' : ''}`}>
        {children}
        <InputFieldIcon icon={icon} error={Boolean(errorText)} />
        <InputFieldButtons
          resetToggle={handeReset}
          multiToggleRef={choicesToggleRef}
          helpText={helpText}
          loading={loading}
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

export default InputTextFieldWrapper
