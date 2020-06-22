import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

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
        </Switch>
      </Router>
    </div>
  )
}

export default App