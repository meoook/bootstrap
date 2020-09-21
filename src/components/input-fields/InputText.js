import React, { useEffect, useRef, useState } from 'react'
import InputTextFieldBuild from './Components/InputTextFieldBuild'

const InputText = (props) => {
  // const [val, setVal] = useState("init val")
  const valRef = useRef('initial value')
  const [val, setVal] = useState('xxx')
  useEffect(() => {
    console.log('RENDER: ROOT')
  })
  const change = (value) => {
    console.log('Root changing ref:', value)
    valRef.current = value
  }
  const finish = (value) => {
    console.log('Root finish:', value, valRef.current)
    valRef.current = value
    setVal(value)
    console.log('val before', val, 'setted to', value)
  }
  return (
    <InputTextFieldBuild
      val={val}
      chVal={change}
      onFinish={finish}
      label='wahha'
      ph='enter'
      icon='search'
      outColor='successa'
      loading={true}
      // errorText='This is error text'
      helpText='Field help information'
    />
  )
}

export default InputText
