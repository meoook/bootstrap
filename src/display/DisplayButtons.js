import React from 'react'
import IcoGet from '../components/ico-get/index'

const DisplayButtons = (props) => {
  return (
    <section>
      <div className='row around center'>
        <button>no style</button>
        <button className='btn'>button btn</button>
        <button className='btn'>button btn with long text</button>
        <div className='btn'>div btn</div>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn'>
          <IcoGet name='check' />
          <span>Icon</span>
        </button>
        <button className='btn'>
          <span>Icon long text text</span>
          <IcoGet name='summary' />
        </button>
        <button className='btn'>
          <IcoGet name='summary' />
          <span>Icon long text text</span>
        </button>
        <div className='btn'>
          <IcoGet name='search' />
          <span>div Icon</span>
        </div>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn btn-success'>success</button>
        <button className='btn btn-warning'>warning</button>
        <button className='btn btn-error'>error</button>
        <button className='btn btn-info'>info</button>
        <button className='btn btn-brand'>brand</button>
        <div className='btn btn-warning'>div warning</div>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn small'>small</button>
        <button className='btn small btn-warning'>small</button>
        <button className='btn small btn-error'>
          <IcoGet name='summary' />
          <span>error</span>
        </button>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn big btn-info'>
          <IcoGet name='check' />
          <span>info</span>
        </button>
        <button className='btn big btn-brand'>
          <IcoGet name='summary' />
          <span>brand</span>
        </button>
        <div className='btn big btn-warning'>
          <IcoGet name='summary' />
          <span>div</span>
        </div>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn small btn-info' disabled={true}>
          <IcoGet name='summary' />
          <span>disabled</span>
        </button>
        <button className='btn btn-brand' disabled={true}>
          <IcoGet name='summary' />
          <span>disabled</span>
        </button>
        <button className='btn big btn-warning' disabled={true}>
          <IcoGet name='summary' />
          <span>disabled</span>
        </button>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn small btn-nop btn-error'>
          <IcoGet name='check' />
        </button>
        <button className='btn btn-nop'>
          <IcoGet name='search' />
        </button>
        <button className='btn big btn-nop btn-success'>
          <IcoGet name='summary' />
        </button>
      </div>
      <hr />
      <div className='row around center'>
        <button className='btn small btn-ico'>&times;</button>
        <button className='btn btn-ico'>&times;</button>
        <button className='btn big btn-ico'>&times;</button>
        <button className='btn small btn-ico'>
          <IcoGet name='check' />
        </button>
        <button className='btn btn-ico'>
          <IcoGet name='check' />
        </button>
        <button className='btn big btn-ico'>
          <IcoGet name='summary' />
        </button>
      </div>
    </section>
  )
}

export default DisplayButtons
