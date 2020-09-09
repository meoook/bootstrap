import React from 'react'
import DisplayIcons from './display/DisplayIcons'
import DisplayLoaders from './display/DisplayLoaders'
import DisplayGrid from './display/DisplayGrid'
// import { In } from './input-fields/InputField'

function App() {
  return (
    <div className='container'>
      <DisplayIcons />
      <DisplayLoaders />
      <DisplayGrid />
    </div>
  )
}

export default App
