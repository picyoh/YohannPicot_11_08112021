import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '..//assets/LOGO.png'

class Header extends React.Component {
    render(){
         return (
              <header>
                  <img src={ logo } alt="logo" />
                  <nav>
                      <NavLink exact activeClassName='active' to='/'>Acceuil</NavLink>
                      <NavLink activeClassName='active' to='/about'>A Propos</NavLink>
                  </nav>
              </header>
         )
    }
}

export default Header
