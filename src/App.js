import React from 'react'
import DisplayIcons from './display/DisplayIcons'

// import DisplayLoaders from './display/DisplayLoaders'
// import DisplayGrid from './display/DisplayGrid'
// import DisplayButtons from './display/DisplayButtons'
// import DisplayPictures from './display/DisplayPictures'
// import DisplayGroup from './display/DisplayGroup'
// import DisplaySwitch from './display/DisplaySwitch'
// import DisplayInputs from './display/DisplayInputs'
// import DisplayInputsChoices from './display/DisplayInputsChoices'
// import { In } from './input-fields/InputField'

import DisplayComponent from './display/DisplayComponent'
import DisplayIcoLangs from './display/DisplayIcoLangs'
import LoaderCar from './components/loader-car'
import Loader from './components/loader'
import Icon from './components/ico-get'

function App() {
  return (
    <div className='container'>
      <DisplayComponent>
        <Loader />
      </DisplayComponent>

      <DisplayComponent>
        <Icon name='backup' />
      </DisplayComponent>

      <DisplayComponent>
        <Icon name='description' />
      </DisplayComponent>

      <DisplayIcons />

      <DisplayIcoLangs />

      <DisplayComponent>
        <LoaderCar />
      </DisplayComponent>

      {/* <DisplayLoaders /> */}
      {/* <DisplayGrid /> */}
      {/* <DisplayButtons /> */}
      {/* <DisplayGroup /> */}
      {/* <DisplaySwitch /> */}
      {/* <DisplayInputs /> */}
      {/* <DisplayInputsChoices /> */}
      {/* <DisplayPictures /> */}
      {/* Cards, popup, buttons menu (small) */}
    </div>
  )
}

export default App
