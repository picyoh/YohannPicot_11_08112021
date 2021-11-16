import React from 'react'

import logo from '../assets/logo'

class Footer extends React.Component {
    render(){
         return (
              <footer>
                   <img src={ logo } alt="logo" />
                   <p>&copy; 2020 Kasa. All right reserved</p>
              </footer>
         )
    }
}

export default Footer
