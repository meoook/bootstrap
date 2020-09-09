import React from 'react'
import { IcoGet, IcoLang } from '../components/icons'

const DisplayIcons = (props) => {
  const icoArr = [
    'success',
    'warning',
    'error',
    'info',
    'addcircle',
    'arrows',
    'settings',
    'apartment',
    'cloudin',
    'descr',
    'folder',
    'foldero',
    'language',
    'search',
    'summary',
    'work',
    'worko',
  ]
  const icoLang = [
    'no lang',
    'german',
    'english',
    'spanish',
    'russian',
    'chinese',
  ]
  return (
    <section>
      <div className='row around'>
        {icoArr.map((item) => (
          <div key={item} className='column'>
            <div>
              <IcoGet name={item} />
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='row'>
        {icoLang.map((item) => (
          <div key={item} className='column'>
            <div>
              <IcoLang name={item} />
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='column'>
          <div>
            <IcoGet name='attantion' />
          </div>
          <div>attantion</div>
        </div>
        <div className='column'>
          <div>
            <IcoGet name='question' />
          </div>
          <div>question</div>
        </div>
      </div>
    </section>
  )
}

export default DisplayIcons
