import React from 'react'

const DisplayGroup = (props) => {
  return (
    <section>
      <div className='row around center'>
        <div className='control-group'>
          <div>Any</div>
          <div>text</div>
          <div>here</div>
        </div>
        <div className='control-group'>
          <button className='btn btn-nop'>&lt;</button>
          <div>1</div>
          <button className='btn btn-nop'>&gt;</button>
        </div>
        <div className='control-group'>
          <button className='btn btn-nop'>&times;</button>
        </div>
        <div className='control-group'>
          <button className='btn btn-brand'>brand</button>
          <button className='btn btn-nop btn-brand'>&times;</button>
        </div>
        <div className='control-group'>
          <button className='btn btn-nop'>&lt;</button>
          <button className='btn btn-nop'>1</button>
          <button className='btn btn-nop'>2</button>
          <button className='btn btn-nop'>3</button>
          <button className='btn btn-nop'>&gt;</button>
        </div>
      </div>
      <hr />
      <div className='row around center'>
        <div className='control-group small'>
          <div>Any</div>
          <div>text</div>
          <div>here</div>
        </div>
        <div className='control-group small'>
          <button className='btn btn-nop'>&lt;</button>
          <div>1</div>
          <button className='btn btn-nop'>&gt;</button>
        </div>
        <div className='control-group small'>
          <button className='btn btn-nop'>&times;</button>
        </div>
        <div className='control-group small'>
          <button className='btn btn-error'>error</button>
          <button className='btn btn-nop btn-error'>&times;</button>
        </div>
        <div className='control-group small'>
          <button className='btn btn-nop'>&lt;</button>
          <button className='btn btn-nop'>1</button>
          <button className='btn btn-nop'>2</button>
          <button className='btn btn-nop'>3</button>
          <button className='btn btn-nop'>4</button>
          <button className='btn btn-nop'>5</button>
          <button className='btn btn-nop'>&gt;</button>
        </div>
      </div>
      <hr />
      <div className='row around center'>
        <div className='control-group big'>
          <div>Any</div>
        </div>
        <div className='control-group big'>
          <button className='btn btn-nop'>&times;</button>
        </div>
        <div className='control-group big'>
          <button className='btn btn-success'>success</button>
          <button className='btn btn-nop btn-success'>&times;</button>
        </div>
        <div className='control-group big'>
          <button className='btn btn-nop'>&lt;</button>
          <button className='btn btn-nop'>1</button>
          <button className='btn btn-nop'>2</button>
          <button className='btn btn-nop'>3</button>
          <button className='btn btn-nop'>&gt;</button>
        </div>
      </div>
    </section>
  )
}

export default DisplayGroup
