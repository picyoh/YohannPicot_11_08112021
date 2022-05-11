import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './styles/main.scss'

import Home from './pages/Home'
import Accom from './pages/Accom'
import About from './pages/About'
import Error404 from './pages/Error404'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/acco/:hostId" render= {props => (
          <Accom {...props} />
        )}/>
        <Route path='/error404'>
          <Error404 />
        </Route>
        <Redirect to='/error404' />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

