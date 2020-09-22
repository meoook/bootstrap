import React, { useEffect, useRef, useState, useCallback } from 'react'
import InputFieldButtons from './Components/InputFieldButtons'
import InputFieldIcon from './Components/InputFieldIcon'
import InputFieldOutline from './Components/InputFieldOutline'
import InputFieldValues from './Components/InputFieldValues'
import InputFieldChoices from './Components/InputFieldChoices'
import InputFieldError from './Components/InputFieldError'

// Util

const choicesMapper = (value, choices, toActive = [], filterActive = false) => {
  if (!choices || !choices.length) return []
  // console.log('MAPPER', typeof choices[0], toActive)
  const result = []
  const uniqNames = new Map()
  const uniqActive = new Map([...toActive.map((item) => [item, true])])

  choices.forEach((choice) => {
    const obj = typeof choice === 'object' ? choice : { name: choice }
    if (!uniqNames.has(obj.name)) {
      uniqNames.set(obj.name, true) // set any value to Map
      const active = uniqActive.has(obj.name)
      if (filterActive && active) return
      result.push({
        name: obj.name,
        icon: 'icon' in obj ? obj.icon : null,
        active: active,
        disabled: 'disabled' in obj && obj.disabled,
      })
    }
  })
  return result
    .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    .sort((a, b) => {
      const first = a.name.toUpperCase()
      const second = b.name.toUpperCase()
      if (first < second) {
        return -1
      } else if (first > second) {
        return 1
      }
      return 0
    })
}

const InputChoicesField = ({
  val = '', // Value setted by program
  chInp = null, // Callback: Handle change input (useRef on choices if choices updated by this callback)
  vals = [], // Display multi values
  rmVal = null, // Callback: To remove value from values list (if set - multi value)
  label = '', // label with outline or placeholder
  ph = 'Введите значение', // Placeholder (displayed only with choices or with icon field)
  icon = '', // icon name before text
  errorText = '', // error text (out - red)
  helpText = '', // help text onHover info Icon
  outColor = '', // if set - display outline border & label control
  onFinish = null, // Callback: reset or onBlur or keyEnter or select from choices
  isChoiser = false, // If no choices but need to display choice toggler
  choices = [], // Choices for dropdown list, if not set - display "no variants" // TODO: Mb ref from root
  choicesHide = true, // Hide choices after choice selected
  choicesFilter = false, // To filter active val(s) from choices list
  loading = false, // State for field loading (choices and icon)
  disabled = false, // disable ui control
}) => {
  // State
  const [inputVal, setInputVal] = useState('')
  const inRef = useRef()
  const [choicesDspl, setChoicesDspl] = useState(false) // Toggler to display choices
  const choicesRef = useRef([]) // Must be an array of special items

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
  const btnClass =
    helpText || choices.length || isChoiser ? ' btns-two' : ' btns-one'

  // utils
  const checkFocus = () => {
    if (inRef.current !== document.activeElement) {
      inRef.current.focus()
    }
  }

  // Listners
  const choicer = useCallback(
    (value) => {
      if (choices.length || isChoiser)
        choicesRef.current = choicesMapper(
          value,
          choices,
          [...vals, val],
          choicesFilter
        )
    },
    [val, vals, isChoiser, choices, choicesFilter]
  )

  useEffect(() => {
    choicer(val)
  }, [choicer, val])
  useEffect(() => {
    setInputVal(val)
  }, [val])

  // Handlers
  const handleClick = (e) => {
    e.stopPropagation()
    if (disabled) return
    checkFocus()
    if (choices.length) setChoicesDspl((prev) => !prev)
  }

  const handleChange = (e) => {
    if (disabled) return
    const value = e.target.value
    setInputVal(value)
    if (chInp) chInp(value)
    choicer(value)
    if (choices.length || isChoiser) setChoicesDspl(true)
  }

  const handleKeyPress = (e) => {
    if (disabled) return
    if (onFinish && e.key === 'Enter') onFinish(inputVal)
    if (choices.length || isChoiser) setChoicesDspl(false)
  }

  const handleReset = (e) => {
    e.stopPropagation()
    if (disabled) return
    checkFocus()
    if (!val) setInputVal('')
    else if (onFinish) onFinish('')
    else setInputVal('')
    choicer('')
  }

  const handleChoicesToggle = (e) => {
    e.stopPropagation()
    if (disabled) return
    checkFocus()
    setChoicesDspl((prev) => !prev)
  }

  const handleChoiceClick = (value, e) => {
    console.log('CHOICE CLICKED', value)
    e.stopPropagation()
    checkFocus()
    if (onFinish) onFinish(value)
    else setInputVal(value)
    if (choicesHide) setChoicesDspl(false)
    choicer(value)
  }

  const handleRemoveVal = (value, e) => {
    console.log('Remove value')
    e.stopPropagation()
    if (disabled) return
    checkFocus()
    if (rmVal) rmVal(value)
  }

  const handleLoseFocus = (e) => {
    if (disabled) return
    if (onFinish) {
      if (choices.length || isChoiser) {
        if (!inputVal || choices.includes(inputVal)) onFinish(inputVal)
        // else if (val) setInputVal(val)
        // else setInputVal('')
      } else onFinish(inputVal)
    }
  }

  const handleMouseOut = (e) => {
    console.log('MOUSE OVER')
    if (disabled) return
    setChoicesDspl(false)
  }

  return (
    <div className='input' disabled={disabled} onClick={handleClick}>
      <div className={`input-root${icon ? ' icon' : ''}${btnClass}`}>
        <InputFieldValues values={vals} removeVal={handleRemoveVal} />
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
          hasChoices={Boolean(choices.length)}
          choicesToggled={choicesDspl}
          choicesToggle={handleChoicesToggle}
          helpText={helpText}
          loading={loading}
          disabled={disabled}
        />
        <InputFieldOutline label={label} color={outlineColor} />
      </div>
      {errorText ? (
        <InputFieldError text={errorText} />
      ) : (
        <InputFieldChoices
          dispay={choicesDspl}
          choices={choicesRef.current}
          close={handleMouseOut}
          select={handleChoiceClick}
          loading={loading}
        />
      )}
    </div>
  )
}

export default InputChoicesField
