import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo'

class Header extends React.Component {
    render(){
         return (
              <header>
                  <img src={ logo } alt="logo" />
                  <nav>
                      <Link to='/'>Acceuil</Link>
                      <Link to='/about'>A propos</Link>
                  </nav>
              </header>
         )
    }
}

export default Header
