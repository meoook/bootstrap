import React, { useEffect, useRef, useState } from "react"
import InputTextFieldBuild from "./Components/InputTextFieldBuild"

const InputText = (props) => {
  const [val, setVal] = useState("init val")
  const valRef = useRef("initial value")
  useEffect(() => {
    console.log("RENDER: ROOT")
  })
  const change = (value) => {
    console.log("Root changing ref:", value)
    valRef.current = value
  }
  const finish = (value) => {
    console.log("Root finish:", value)
    setVal(value.trim())
  }
  return <InputTextFieldBuild val={val} chVal={change} onFinish={finish} />
}

export default InputText
