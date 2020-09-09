import React, { useState } from "react"
import { IcoGet, IcoLang } from "./components/icons"
import Loader from "./components/static/Loader"
// import { In } from './input-fields/InputField'

function App() {
  return (
    <div className='container'>
      <section>
        <IcoGet name='success' />
        <IcoGet name='warning' />
      </section>
      <section>
        <Loader />
      </section>
    </div>
  )
}

export default App
