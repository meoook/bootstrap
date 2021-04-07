import React, { useRef, useState } from 'react'
import InputTextField from '../components/input-text/index'
// import InputFields from '@bit/bazha.easyui.inputFields'

const DisplayInputs = () => {
  const [val, setVal] = useState('')
  const [val1, setVal1] = useState('')
  const valRef = useRef('')
  const change = (value) => {
    console.log('Root changing ref:', value)
    valRef.current = value
  }
  const finish = (value) => {
    console.log('Root finish:', value, valRef.current)
    valRef.current = value
    setVal(value)
  }
  const finish1 = (value) => {
    setVal1(value)
  }

  return (
    <section id='inputs'>
      <div className='row around'>
        <InputTextField val={val} chInp={change} onFinish={finish} />
        <InputTextField val={val} onFinish={finish} ph='Place holder' />
      </div>
      <div className='row around'>
        <InputTextField
          val={val}
          onFinish={finish}
          label='Label one' // don't work without outColor and disable ph (be care)
          ph='Place holder'
          helpText='Field help information'
        />
        <InputTextField
          val={val}
          onFinish={finish}
          label='Label two'
          ph='Place holder'
          icon='search' // icon set label on top so placeholder will be visible
        />
      </div>
      <div className='row around'>
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label one asd asd asd as'
          ph='Place holder'
          outColor='default'
          helpText='Field help information'
        />
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label two'
          ph='Place holder'
          icon='search'
          outColor='default'
        />
      </div>
      <div className='row around'>
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label three asd asd'
          ph='Place holder'
          icon='search'
          outColor='success'
          helpText='Field help information'
        />
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label four'
          ph='Place holder'
          icon='search'
          outColor='default'
          loading={true}
          helpText='Field help information'
          errorText='This is error text'
        />
      </div>
      <div className='row around'>
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label five'
          ph='Place holder'
          icon='search'
          outColor='success'
          loading={true}
        />
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label six'
          ph='Place holder'
          icon='search'
          outColor='success'
          loading={true}
          helpText='Field help information'
          disabled={true}
        />
      </div>
    </section>
  )
}

export default DisplayInputs
