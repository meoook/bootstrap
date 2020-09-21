import React from 'react'
import DisplayIcons from './display/DisplayIcons'
import DisplayLoaders from './display/DisplayLoaders'
import DisplayGrid from './display/DisplayGrid'
import DisplayButtons from './display/DisplayButtons'
// import DisplayPictures from './display/DisplayPictures'
import DisplayGroup from './display/DisplayGroup'
import DisplaySwitch from './display/DisplaySwitch'
import DisplayInputs from './display/DisplayInputs'
import DisplayInputsChoices from './display/DisplayInputsChoices'
// import { In } from './input-fields/InputField'

function App() {
  return (
    <div className='container'>
      <DisplayIcons />
      <DisplayLoaders />
      <DisplayGrid />
      <DisplayButtons />
      <DisplayGroup />
      <DisplaySwitch />
      <DisplayInputs />
      <DisplayInputsChoices />

      {/* <DisplayPictures /> */}
      {/* Cards, popup, buttons menu (small) */}
    </div>
  )
}

export default App
