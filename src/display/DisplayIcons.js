import React from 'react'

import { IcoGet } from '../components/icons'

import iconArray from '../components/ico-get/icons'
import Icon from '../components/ico-get/index'

const DisplayIcons = (props) => {
  return (
    <div className='svg'>
      <div className='row long'>
        {Object.keys(iconArray).map((item) => (
          <div key={item} className='col-2 column center'>
            <div>
              Tz
              <Icon name={item} />
              Xx
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>

      <hr />

      <div className='row'>
        <div className='col-2 column center'>
          <div>
            <IcoGet name='attantion' />
          </div>
          <div>attantion</div>
        </div>

        <div className='col-2 column center'>
          <div>
            <IcoGet name='question' />
          </div>
          <div>question</div>
        </div>

        <div className='col-2 column center'>
          <div className='xxxx'>
            <IcoGet name='loader' />
          </div>
          <div>loaderi</div>
        </div>

        <div className='col-2 column center'>
          <div className='xxx'>
            <IcoGet name='loaderbrand' />
          </div>
          <div>loaderbrand</div>
        </div>
      </div>
    </div>
  )
}

export default DisplayIcons
