import React, { useEffect } from 'react'

const DisplayInputs = () => {
  console.log('Display input render')

  useEffect(() => {
    console.log('Rerender call')
  })

  return (
    <section id='inputs'>
      <div className='row around'>
        {/* <InputField /> */}
        <div>no</div>
        <div>no</div>
        <div>no</div>
      </div>
      <hr />
    </section>
  )
}

export default DisplayInputs
