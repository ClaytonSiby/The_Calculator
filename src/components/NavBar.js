import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Quote from './Quote'

const NavBar = () => {
  return (
    <Router>
      <nav>
        <div>
            <h2>Math Magicians</h2>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/quote'>Quote</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/calculator'>
          <App />
        </Route>
        <Route path='/quote'>
          <Quote />
        </Route>
      </Switch>
    </Router>
  )
}

export default NavBar
