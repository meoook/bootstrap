import React from 'react'
import { IcoGet, IcoLang } from '../components/icons'

const DisplayIcons = (props) => {
  const icoArr = [
    'success',
    'warning',
    'error',
    'info',
    'tultip',
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
    'check',
    'arrdown',
    'close',
    'subject',
    'login',
    'logout',
    'menu',
    'user',
    'document',
    'sorting',
    'statistic',
    'refnet',
    'settingsmob',
    'more',
  ].sort((a, b) => {
    const first = a.toUpperCase()
    const second = b.toUpperCase()
    if (first < second) {
      return -1
    } else if (first > second) {
      return 1
    }
    return 0
  })
  const icoLang = [
    'no lang',
    'german',
    'english',
    'spanish',
    'russian',
    'chinese',
  ]
  return (
    <section className='svg'>
      <div className='row long'>
        {icoArr.map((item) => (
          <div key={item} className='col-2 column center'>
            <div>
              <IcoGet name={item} />
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className='row long'>
        {icoLang.map((item) => (
          <div key={item} className='col-3 column center'>
            <div style={{ height: '2em', width: '2em' }}>
              <IcoLang name={item} />
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
    </section>
  )
}

export default DisplayIcons
