import React from 'react'
import Icon from '../../ico-get/index.js'

import styles from '../input.module.scss'

import Loader from '@bit/bazha.easyui.loader'

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
      <div className={styles.btns}>
        <Loader />
      </div>
    )
  }
  return (
    <div className={styles.btns}>
      {loading ? <Loader /> : <ResetToggle avalible={canReset} reset={reset} />}
      {hasChoices ? <MultiToggle toggle={choicesToggle} toggled={choicesToggled} /> : <HelpIcon text={helpText} />}
    </div>
  )
}

export default InputFieldButtons

const ResetToggle = ({ avalible, reset }) => {
  if (!avalible || !reset) return null
  return (
    <button tabIndex='-1' className={styles.reset + ' btn btn-ico'} onClick={reset}>
      <Icon name='close' />
    </button>
  )
}

const MultiToggle = ({ toggle, toggled }) => {
  const className = `input-btns-m btn btn-ico${toggled ? ' rotate' : ''}`
  return (
    <button tabIndex='-1' className={className} onClick={toggle}>
      <Icon name='arrdown' />
    </button>
  )
}

const HelpIcon = ({ text }) => {
  if (!text) return null
  return (
    <div className={styles.help}>
      <Icon name='tultip' />
      <div className={styles.helpText}>{text}</div>
    </div>
  )
}
