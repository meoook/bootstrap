import React from 'react'
import Button from '../components/button/index'
import Icon from '@bit/bazha.easyui.ico-get'

const DisplayButtons = (props) => {
  return (
    <section>
      <div className='row around center'>
        <Button>no style</Button>
        <Button>button btn</Button>
        <Button>button btn with long text</Button>
      </div>
      <hr />
      <div className='row around center'>
        <Button icon='check' text='search' />
        <Button icon='check' text='icon' />
        <Button>
          <span>Icon long text text</span>
          <Icon name='summary' />
        </Button>
        <Button>
          <Icon name='summary' />
          <span>Icon long text text</span>
        </Button>
        <Button icon='search' text='div Icon' />
      </div>
      <hr />
      <div className='row around center'>
        <Button color='success' text='success' />
        <Button color='warning' text='warning' />
        <Button color='error' text='error' />
        <Button color='info' text='info' />
        <Button color='brand' text='brand' />
        <Button color='warning' text='warning' />
      </div>
      <hr />
      <div className='row around center'>
        <Button size='small' color='warning' text='small' />
        <Button size='small' color='error' text='small' />
        <Button size='small' color='info' text='small' icon='summary' />
      </div>
      <hr />
      <div className='row around center'>
        <Button size='big' color='info' icon='check' text='info' />
        <Button size='big' color='brand' icon='summary' text='brand' />
        <Button size='big' color='warning' icon='check' text='warning' />
      </div>
      <hr />
      <div className='row around center'>
        <Button color='info' text='disabled' icon='summary' disabled={true} size='small' />
        <Button color='brand' text='disabled' icon='summary' disabled={true} />
        <Button color='warning' text='disabled' icon='summary' disabled={true} size='big' />
      </div>
      <hr />
      <div>Кнопка - no min-width</div>
      <div className='row around center'>
        <Button type='unsized' color='error' icon='check' size='small' />
        <Button type='unsized' icon='search' />
        <Button type='unsized' color='success' icon='summary' size='big' />
      </div>
      <hr />
      <div>Кнопка - иконка</div>
      <div className='row around center'>
        <Button type='circle' size='small' text='&times;' />
        <Button type='circle' text='&times;' />
        <Button type='circle' size='big' text='&times;' />
        <Button type='circle' size='small' icon='check' />
        <Button type='circle' icon='check' />
        <Button type='circle' size='big' icon='check' />
      </div>
    </section>
  )
}

export default DisplayButtons
