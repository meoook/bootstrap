import React, { useState } from 'react'
import InputChoicesField from '../components/input-fields/InputChoicesField'

const DisplayInputsChoices = () => {
  const options = [
    'anyname',
    'random',
    'whatucan',
    'asdassure',
    'asdassure',
    'asdassure',
    'asdassure',
    'tofindasd',
    'onemoreasd',
    'target',
    'target',
    'target',
    'value',
    'manynames',
    'lookuphere',
    'zdoneremny',
    'zdoneremny',
    'zdoneremny',
    'inpursiko',
    'elemtax',
  ]
  // const optionsIco = [
  //   { name: 'Nameone', icon: 'search' },
  //   { name: 'Nameone' },
  //   { name: 'Nameone', icon: 'search' },
  //   { name: 'Nameone', icon: 'search', disabled: false },
  // ]
  const [val, setVal] = useState('')
  // const [val1, setVal1] = useState('')

  // const change = (value) => {
  //   // You can update choices here
  //   console.log('Root changing ref:', value)
  // }
  const finish = (value) => {
    console.log('Root finish:', value, 'old', val)
    if (value === '' || options.includes(value)) {
      setVal(value)
    } else setVal()
  }
  // const finish1 = (value) => {
  //   setVal1(value)
  // }

  return (
    <section className='inputs'>
      <div className='row around'>
        <InputChoicesField
          val={val}
          // chInp={change}
          onFinish={finish}
          icon='search'
          outColor='default'
          ph='Place holder'
          helpText='Field help information'
          choices={options}
        />
        {/* <InputTextField
          val={val}
          onFinish={finish}
          ph='Place holder'
          icon='search'
        /> */}
      </div>
      {/* <div className='row around'>
        <InputTextField
          val={val1}
          onFinish={finish1}
          label='Label three'
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
      </div> */}
      {/* <div className='row around'>
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
      </div> */}
    </section>
  )
}

export default DisplayInputsChoices
