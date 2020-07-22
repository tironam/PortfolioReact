import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'

const App = () => {
  return (
    <>
      <About />
    </>
  )
}

export default App