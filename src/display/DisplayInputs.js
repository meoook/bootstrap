import React, { useState } from "react"
import InputFieldRoot from "../components/input-fields/InputFieldRoot"

const DisplayInputs = () => {
  const [val, setVal] = useState("")

  return (
    <section id='inputs'>
      <div className='row around'>
        <InputFieldRoot val={val} setVal={setVal} outColor='warning' />
      </div>
      <hr />
      <div className='row around'>
        <InputFieldRoot val={val} setVal={setVal} outColor='success' label='Название' />
      </div>
      <hr />
      <div className='row around'>
        <InputFieldRoot val={val} setVal={setVal} outColor='success' icon='summary' label='Название' />
      </div>
    </section>
  )
}

export default DisplayInputs
