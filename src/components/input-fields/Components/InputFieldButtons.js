import React from "react"
import { IcoGet } from "../../icons"
import Loader from "../../static/Loader"

const InputFieldButtons = ({ canReset, reset, canMulti, multiToggle, multiToggled, helpText, loading, disabled }) => {
  if (!canReset && !multiToggle && !helpText && !loading) return null
  return (
    <div className='input-btns'>
      {loading ? <Loader name='shadow' /> : <ResetToggle avalible={canReset} reset={reset} />}
      {canMulti ? <MultiToggle toggle={multiToggle} toggled={multiToggled} /> : <HelpIcon text={helpText} />}
    </div>
  )
}

export default InputFieldButtons

const ResetToggle = ({ avalible, reset }) => {
  if (!avalible || !reset) return null
  return (
    <button tabIndex='-1' className='input-btns-x btn btn-ico' onClick={reset}>
      <svg viewBox='0 0 24 24'></svg>
    </button>
  )
}

const MultiToggle = ({ toggle, toggled }) => {
  const className = `input-btns-m btn btn-ico ${toggled ? " rotate" : ""}`
  return (
    <button tabIndex='-1' className={className} onClick={toggle}>
      <IcoGet name='arrdown' />
    </button>
  )
}

const HelpIcon = ({ text }) => {
  if (!text) return null
  return (
    <div className='input-btns-h btn btn-ico'>
      <IcoGet name='tultip' />
      <div className='input-btns-h-text'>{text}</div>
    </div>
  )
}
