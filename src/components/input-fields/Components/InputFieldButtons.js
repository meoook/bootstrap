import React from 'react'
import { IcoGet } from '../../icons'
import Loader from '../../static/Loader'

const InputFieldButtons = ({
  canReset,
  reset,
  hasChoices,
  choicesToggle,
  choicesToggled,
  helpText,
  loading,
  disabled,
}) => {
  if (!canReset && !choicesToggle && !helpText && !loading) return null
  if (disabled) {
    if (!loading) return null
    return (
      <div className='input-btns'>
        <Loader name='svg' />
      </div>
    )
  }
  return (
    <div className='input-btns'>
      {loading ? (
        <Loader name='svg' />
      ) : (
        <ResetToggle avalible={canReset} reset={reset} />
      )}
      {hasChoices ? (
        <MultiToggle toggle={choicesToggle} toggled={choicesToggled} />
      ) : (
        <HelpIcon text={helpText} />
      )}
    </div>
  )
}

export default InputFieldButtons

const ResetToggle = ({ avalible, reset }) => {
  if (!avalible || !reset) return null
  return (
    <button tabIndex='-1' className='input-btns-x btn btn-ico' onClick={reset}>
      <IcoGet name='close' />
    </button>
  )
}

const MultiToggle = ({ toggle, toggled }) => {
  const className = `input-btns-m btn btn-ico ${toggled ? ' rotate' : ''}`
  return (
    <button tabIndex='-1' className={className} onClick={toggle}>
      <IcoGet name='arrdown' />
    </button>
  )
}

const HelpIcon = ({ text }) => {
  if (!text) return null
  return (
    <div className='input-btns-h'>
      <IcoGet name='tultip' />
      <div className='input-btns-h-text'>{text}</div>
    </div>
  )
}
