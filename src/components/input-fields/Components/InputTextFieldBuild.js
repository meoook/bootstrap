import React, { useEffect, useRef, useState } from 'react'
import InputFieldButtons from './InputFieldButtons'
import InputFieldIcon from './InputFieldIcon'
import InputFieldOutline from './InputFieldOutline'
import InputFieldValues from './InputFieldValues'
import InputFieldChoices from './InputFieldChoices'
import InputFieldError from './InputFieldError'

// Util
const filterChoices = (value, choices) =>
  choices.filter((item) => item.toLowerCase().includes(value.toLowerCase()))

const InputTextFieldBuild = ({
  val = '', // Value setted by program
  chVal = null, // Handle change value
  vals = [], // Display multi values
  rmVal = null, // Callback: To remove value from values list
  label = '', // label with outline or placeholder
  ph = 'Введите значение', // Placeholder (displayed only with choices or with icon field)
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  choices = [], // Choices for dropdown list, if not set - display "no variants"
  loading = false, // State for field loading (choices and icon)
  disabled = false, // disable ui control
}) => {
  // State
  const [inputVal, setInputVal] = useState('')
  const inRef = useRef()
  const choicesRef = useRef([]) // Must be an array of special items
  const dChoicesRef = useRef(false) // Toggler to display choices

  // Const state
  const required = icon || vals.length ? false : true
  const placeholder = !required || !label ? ph : ''
  const outlineColor = outColor
    ? errorText
      ? 'error'
      : disabled
      ? 'disabled'
      : loading
      ? 'warning'
      : outColor
    : ''
  const btnClass = helpText || choices.length ? ' btns-two' : ' btns-one'

  // Listners
  useEffect(() => {
    console.log('RENDER: Builder')
  })
  useEffect(() => {
    console.log('Value changed:', val)
    setInputVal(val)
  }, [val])
  // useEffect(() => {
  //   console.log("Choices or value changed:", val, choices) // Mb useMemo
  //   choicesRef.current = filterChoices(val, choices)
  // }, [val, choices])

  // Set window listner cos e.stopPropagation don't work with onBlur
  // useEffect(() => {
  //   window.addEventListener('click', handleMouseOver)
  //   return () => {
  //     window.removeEventListener('click', handleMouseOver)
  //   }
  //   // eslint-disable-next-line
  // }, [])

  // Handlers
  const handleClick = (e) => {
    console.log('Check focused')
    e.stopPropagation()
    if (disabled) return
    if (inRef.current !== document.activeElement) {
      console.log('Not focused - focusing')
      inRef.current.focus()
    } else if (choices.length) {
      console.log('Focused witch choices - toggle')
      dChoicesRef.current = !dChoicesRef.current
    }
  }

  const handleChange = (e) => {
    if (disabled) return
    const value = e.target.value
    setInputVal(value)
    // console.log('Changing input', value)
    if (chVal) chVal(value)
    if (choices.length) choicesRef.current = filterChoices(value, choices)
  }

  const handleKeyPress = (e) => {
    // console.log("Key press", e.target.value)
    if (disabled) return
    if (onFinish && e.key === 'Enter') onFinish(inputVal)
  }

  const handleReset = (e) => {
    console.log('Reset')
    // e.stopPropagation()
    if (disabled) return
    if (onFinish) onFinish('')
    else setInputVal('')
    if (choices.length) choicesRef.current = choices
  }

  const handleChoicesToggle = (e) => {
    console.log('Choices toggle')
    e.stopPropagation()
    if (disabled) return
    dChoicesRef.current = !dChoicesRef.current
  }

  const handleChoiceClick = (value, e) => {
    console.log('Choice selected')
    e.stopPropagation()
    if (onFinish) onFinish(value)
    else setInputVal(value)
    if (choices.length) choicesRef.current = filterChoices(value, choices)
  }

  const handleRemoveVal = (value, e) => {
    console.log('Remove value')
    e.stopPropagation()
    if (disabled) return
    if (rmVal) rmVal(value)
  }

  const handleMouseOver = () => {
    console.log('Mouse over:', inputVal)
    if (disabled) return
    if (onFinish) onFinish(inputVal)
  }

  return (
    <div className='input' onClick={handleClick}>
      <div className={`input-root${icon ? ' icon' : ''}${btnClass}`}>
        <InputFieldValues values={vals} removeVal={handleRemoveVal} />
        <input
          tabIndex='0'
          type='text'
          autoComplete='off'
          ref={inRef}
          value={inputVal}
          onBlur={handleMouseOver}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        <InputFieldIcon icon={icon} error={Boolean(errorText)} />
        <InputFieldButtons
          canReset={Boolean(inputVal)}
          reset={handleReset}
          handleRemoveVal
          canMulti={Boolean(choices.length)}
          multiToggled={dChoicesRef.current}
          multiToggle={handleChoicesToggle}
          helpText={helpText}
          loading={loading}
          disabled={disabled}
        />
        <InputFieldOutline label={label} color={outlineColor} />
      </div>
      {<InputFieldError text={errorText} /> || (
        <InputFieldChoices
          dispay={dChoicesRef.current}
          choices={choicesRef.current}
          select={handleChoiceClick}
          loading={loading}
        />
      )}
    </div>
  )
}

export default InputTextFieldBuild
