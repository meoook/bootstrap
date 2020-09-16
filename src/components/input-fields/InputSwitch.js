import React from 'react'
import { IcoGet } from '../icons'

const InputSwitch = ({
  val = false,
  setVal,
  label = '',
  type = '',
  size = '',
  disabled = false,
}) => {
  const elemClass = () => {
    let name = 'switch'
    if (type === 'toggle') name += ' switch-toggle'
    else if (type === 'radio') name += ' switch-radio'
    else name += ' switch-check'
    if (val) name += ' active'
    if (size === 'big') name += ' big'
    else if (size === 'small') name += ' small'
    return name
  }
  const toogle = () => {
    if (!disabled) setVal((prev) => !prev)
  }
  return (
    <div className={elemClass()} onClick={toogle} disabled={disabled}>
      <div className='switch-btn'>
        <div className='switch-mark'>
          {!['radio', 'toggle'].includes(type) && <IcoGet name='check' />}
        </div>
      </div>
      {label ? <label>{label}</label> : null}
    </div>
  )
}

export default InputSwitch
