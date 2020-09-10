import React from 'react'
import Loader from '../components/static/Loader'

const DisplayButtons = (props) => {
  return (
    <section>
      <div className='row around'>
        <Loader />
        <Loader name='dots' />
        <Loader name='shadow' />
      </div>
      <div className='row around'>
        <Loader size={1} />
        <Loader size={1} name='dots' />
        <Loader size={1} name='shadow' />
      </div>
      <div className='row around'>
        <Loader size={2} />
        <Loader size={2} name='dots' />
        <Loader size={2} name='shadow' />
      </div>
      <div className='row around'>
        <Loader size={3} />
        <Loader size={3} name='dots' />
        <Loader size={3} name='shadow' />
      </div>
    </section>
  )
}

export default DisplayButtons
