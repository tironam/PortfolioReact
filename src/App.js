import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Tech from './pages/Tech'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App