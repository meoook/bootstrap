import React, { useState } from 'react'
import InputTextField from '../components/input-fields/InputTextField'

const DisplayInputsChoices = () => {
  const options = [
    'anyname',
    'random',
    'whatucan',
    'asdassure',
    'tofindasd',
    'onemoreasd',
    'target',
    'value',
    'manynames',
    'lookuphere',
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
  const [val1, setVal1] = useState('')

  const change = (value) => {
    // You can update choices here
    console.log('Root changing ref:', value)
  }
  const finish = (value) => {
    console.log('Root finish:', value)
    setVal(value)
  }
  const finish1 = (value) => {
    setVal1(value)
  }

  return (
    <section id='inputs'>
      <div className='row around'>
        <InputTextField
          val={val}
          chVal={change}
          onFinish={finish}
          ph='Place holder'
          helpText='Field help information'
          choices={options}
        />
        <InputTextField
          val={val}
          onFinish={finish}
          ph='Place holder'
          icon='search'
        />
      </div>
      <div className='row around'>
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

export default DisplayInputsChoices
