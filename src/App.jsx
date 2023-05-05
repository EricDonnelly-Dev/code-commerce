import React from 'react'
import './App.css'
import Signup from './components/SignupLogin/signup'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFontAwesome)


function App() {
  return (
    <>
     <Signup />
    </>
  )
}

export default App
