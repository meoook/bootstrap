import React, { useState } from 'react'
import InputField from './input-fields/InputField'
// import { In } from './input-fields/InputField'

function App() {
  const [val, setVal] = useState('xxxx')
  const [choices, setChoices] = useState([
    'xxxx',
    'yyyy',
    'zzzz',
    'aaaa',
    'bbbb',
    'zzaa',
    'kkbb',
    'llzzll',
  ])

  const changVal = (value) => {
    console.log('root', value)
    setVal(value)
  }

  return (
    <div className='container'>
      <div>
        <InputField
          valu={val}
          setVal={changVal}
          label='Login'
          options={choices}
        />
      </div>
      <div onClick={setVal.bind(this, 'vvvv')}>xxxxx</div>
    </div>
  )
}

export default App
