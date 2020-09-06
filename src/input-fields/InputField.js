import React, { useState, useEffect } from 'react'

const InputField = ({
  valu,
  setVal,
  label = 'Введите значение',
  options = [],
  refrOptions = null,
}) => {
  const LEN_TO_REFRESH = 2
  // state
  const [choices, setChoices] = useState([])
  const [input, setInput] = useState('')
  const [displayDrop, setDisplaylDrop] = useState(false)
  const [active, setActive] = useState(false)
  const [ddClicked, setDdClicked] = useState(false)

  useEffect(() => {
    setInput(valu)
    setChoices(options.filter((item) => item !== valu))
  }, [valu, options])
  // useEffect(() => {
  //   setInput(valu)
  // }, [options])
  // handlers
  const handleInput = (e) => {
    let val = e.target.value
    setInput(val)
    // console.log('child', val)
    if (options.length) {
      setChoices(options.filter((item) => item.includes(val)))
      if (!displayDrop && input) setDisplaylDrop(true)
    }
    if (refrOptions && options.length && val.length > LEN_TO_REFRESH)
      refrOptions(val.trim())
  }
  const handleLoseFocus = (event) => {
    event.stopPropagation()

    console.log('loze focus', { ...event })
    console.log('loze focus', ddClicked)
    if (ddClicked) setDdClicked(false)
    else setActive(false)
    if (!options.length) setVal(input)
    else if (options.includes(input)) setVal(input)
    else setVal('')
  }
  const optSelect = (val, event) => {
    event.stopPropagation()

    console.log('option selected', val)
    setDdClicked(true)
    setActive(false)
    setDisplaylDrop(false)
    setVal(val)
  }
  const handleClick = (event) => {
    event.stopPropagation()
    console.log('clicked', active)
    console.log('displaydd', displayDrop)
    if (active) setDisplaylDrop(true)
    setActive(true)
  }
  // elems
  const dropdown =
    !active || !displayDrop || !choices.length ? null : (
      <div className='input-dropdown'>
        {choices.map((item) => (
          <div
            key={item}
            className={item === valu ? 'active' : null}
            onClick={optSelect.bind(this, item)}>
            {item}
          </div>
        ))}
      </div>
    )
  // if statement
  const btnsClass = () => {
    if (valu && choices.length) return 'input-btns icons'
    if (valu || choices.length) return 'input-btns icon'
    return 'input-btns'
  }

  return (
    <div className='input' onClick={handleClick}>
      <div className='input-wrapper'>
        <div className='input-root icon'>
          <input
            tabIndex='0'
            type='text'
            autoComplete='off'
            required
            value={input}
            onChange={handleInput}
            // onBlur={setInput.bind(this, '')}
            onBlur={handleLoseFocus}
          />
          <label>{label}</label>
          <div className={btnsClass()}>
            {input ? (
              <button
                tabIndex='-1'
                className='input-btns-x'
                onClick={setVal.bind(this, '')}>
                <span className='input-icons'>
                  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                  </svg>
                </span>
              </button>
            ) : null}
            {choices.length > 0 && (
              <button
                tabIndex='-1'
                className={`input-btns-m${displayDrop ? ' rotate' : ''}`}
                onClick={setDisplaylDrop.bind(this, !displayDrop)}>
                <span className='input-icons'>
                  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                    <path d='M7 10l5 5 5-5z'></path>
                  </svg>
                </span>
              </button>
            )}
          </div>
          <fieldset>
            <legend>
              <span>{label}</span>
            </legend>
          </fieldset>
        </div>
        {dropdown}
      </div>
    </div>
  )
}

export default InputField
