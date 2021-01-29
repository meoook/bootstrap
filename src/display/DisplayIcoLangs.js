import React from 'react'
import iconArray from '../components/ico-lang/icons'
import IcoLang from '../components/ico-lang/index'

const DisplayIcoLangs = (props) => {
  return (
    <div className='svg'>
      <div className='row long'>
        {Object.keys(iconArray).map((item) => (
          <div key={item} className='col-2 column center'>
            <div>
              Tz
              <IcoLang name={item} />
              Xx
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayIcoLangs
