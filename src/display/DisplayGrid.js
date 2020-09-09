import React from 'react'

const DisplayGrid = (props) => {
  let arr = new Array()
  for (var i = 1; i < 12; i++) {
    arr.push(i)
  }
  return (
    <section id='grid'>
      <div className='row'>
        <div>no</div>
        <div>no</div>
        <div>no</div>
      </div>
      <div className='row around'>
        <div>around</div>
        <div>around</div>
        <div>around</div>
      </div>
      <div className='row'>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
      </div>
      <div className='row'>
        <div className='col col-12'>col-12</div>
        {arr.map((idx) => (
          <React.Fragment key={idx}>
            <div className={`col col-${12 - idx}`}>col-{12 - idx}</div>
            <div className={`col col-${idx}`}>col-{idx}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default DisplayGrid
