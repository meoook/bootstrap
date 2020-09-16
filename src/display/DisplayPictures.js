import React from 'react'
import { DisplayImage } from '../components/icons'

const DisplayPictures = (props) => {
  return (
    <section>
      <div className='row around'>
        <div className='col' style={{ overflow: 'hidden' }}>
          <DisplayImage name='' />
        </div>
        <div className='col' style={{ overflow: 'hidden' }}>
          <DisplayImage name='desert' />
        </div>
      </div>
    </section>
  )
}

export default DisplayPictures
