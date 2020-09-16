import React, { useState } from 'react'
import InputSwitch from '../components/input-fields/InputSwitch'

const DisplaySwitch = (props) => {
  const [val, setVal] = useState(false)
  return (
    <section>
      <div className='row around center'>
        <InputSwitch val={val} setVal={setVal} />
        <InputSwitch val={val} setVal={setVal} label='On sale' />
        <InputSwitch val={val} setVal={setVal} label='On sale' type='radio' />
        <InputSwitch val={val} setVal={setVal} label='On sale' type='toggle' />
      </div>
      <hr />
      <div className='row around center'>
        <InputSwitch val={val} setVal={setVal} size='small' />
        <InputSwitch val={val} setVal={setVal} size='small' label='On sale' />
        <InputSwitch
          val={val}
          setVal={setVal}
          size='small'
          label='On sale'
          type='radio'
        />
        <InputSwitch
          val={val}
          setVal={setVal}
          size='small'
          label='On sale'
          type='toggle'
        />
      </div>
      <hr />
      <div className='row around center'>
        <InputSwitch val={val} setVal={setVal} size='big' />
        <InputSwitch val={val} setVal={setVal} size='big' label='On sale' />
        <InputSwitch
          val={val}
          setVal={setVal}
          size='big'
          label='On sale'
          type='radio'
        />
        <InputSwitch
          val={val}
          setVal={setVal}
          size='big'
          label='On sale'
          type='toggle'
        />
      </div>
      <hr />
      <div className='row around center'>
        <InputSwitch val={val} setVal={setVal} disabled />
        <InputSwitch
          val={val}
          setVal={setVal}
          disabled={true}
          label='On sale'
        />
        <InputSwitch
          val={val}
          setVal={setVal}
          disabled={true}
          label='On sale'
          type='radio'
        />
        <InputSwitch
          val={val}
          setVal={setVal}
          disabled={true}
          label='On sale'
          type='toggle'
        />
      </div>
    </section>
  )
}

export default DisplaySwitch
