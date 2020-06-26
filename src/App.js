import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App