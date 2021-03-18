import React, { useEffect, useRef, useState } from 'react'
import InputFieldButtons from './components/InputFieldButtons'
import InputFieldIcon from './components/InputFieldIcon'
import InputFieldOutline from './components/InputFieldOutline'
import InputFieldError from './components/InputFieldError'
import styles from './input.module.scss'

const InputTextField = ({
  val = '', // Value setted by program
  chInp = null, // Callback: Handle change input (mb no need)
  label = '', // label with outline or placeholder
  ph = 'Введите значение', // Placeholder (displayed only with choices or with icon field)
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  loading = false, // State for field loading (choices and icon)
  disabled = false, // disable ui control
}) => {
  // State
  const [inputVal, setInputVal] = useState('')
  const inRef = useRef()

  // Const state
  const required = icon ? false : true
  const placeholder = !required || !label ? ph : ''
  const outlineColor = outColor ? (errorText ? 'error' : disabled ? 'disabled' : loading ? 'warning' : outColor) : ''

  // utils
  const checkFocus = () => {
    if (inRef.current !== document.activeElement) {
      inRef.current.focus()
    }
  }

  // Listners
  useEffect(() => {
    setInputVal(val)
  }, [val])

  // Handlers
  const handleClick = (e) => {
    e.stopPropagation()
    if (disabled) return
    checkFocus()
  }

  const handleChange = (e) => {
    if (disabled) return
    const value = e.target.value
    setInputVal(value)
    if (chInp) chInp(value) // Need it ?
  }

  const handleKeyPress = (e) => {
    if (disabled) return
    if (onFinish && e.key === 'Enter') onFinish(inputVal)
  }

  const handleReset = (e) => {
    e.stopPropagation()
    if (disabled) return
    checkFocus()
    if (onFinish) onFinish('')
    else setInputVal('')
  }

  const handleLoseFocus = (e) => {
    if (disabled) return
    if (onFinish) onFinish(inputVal)
  }

  const sumClasses = (...classes) => classes.filter((item) => !!item).join(' ')

  return (
    <div className={styles.input} disabled={disabled} onClick={handleClick}>
      <div className={sumClasses(styles.root, icon ? styles.withIcon : '', helpText ? styles.two : styles.one)}>
        <input
          tabIndex='0'
          type='text'
          autoComplete='off'
          ref={inRef}
          value={inputVal}
          onBlur={handleLoseFocus}
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
          helpText={helpText}
          loading={loading}
          disabled={disabled}
        />
        <InputFieldOutline label={label} color={outlineColor} />
      </div>
      <InputFieldError text={errorText} />
    </div>
  )
}

export default InputTextField
