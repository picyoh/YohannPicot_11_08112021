import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/main.scss'

import Home from './pages/Home'
import Lodging from './pages/Lodging'
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
        <Route path="/lodging">
          <Lodging />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

