import React, { useState } from 'react'
import InputFieldRoot from '../components/input-fields/InputFieldRoot'

const DisplayInputs = () => {
  const [val, setVal] = useState('')

  console.log('Display input render')

  return (
    <section id='inputs'>
      <div className='row around'>
        <InputFieldRoot val={val} setVal={setVal} />
      </div>
      <hr />
      <div className='row around'>
        <InputFieldRoot val={val} setVal={setVal} outColor='warning' />
      </div>
      <hr />
      <div className='row around'>
        <div>
          <InputFieldRoot
            val={val}
            setVal={setVal}
            outColor='success'
            icon='summary'
            label='Название'
          />
        </div>
      </div>
      <hr />
      <div className='row around'>
        <div>
          <InputFieldRoot
            val={val}
            setVal={setVal}
            icon='summary'
            label='Название'
          />
        </div>
      </div>
      <hr />
    </section>
  )
}

export default DisplayInputs
