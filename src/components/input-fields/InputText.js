import React, { useRef } from 'react'
import InputTextFieldBuild from './Components/InputTextFieldBuild'

const InputText = (props) => {
  const val = useRef('init val')
  const finish = (value) => (val.current = value.trim())
  return <InputTextFieldBuild val={val.current} onFinish={finish} />
}

export default InputTextFieldBuild
