import React from 'react'
import { Link } from 'react-router-dom'

class Error404 extends React.Component {
    render(){
         return (
              <section>
                   <h2>404</h2>
                   <h3>Oups! La page que vous demandez n'existe pas.</h3>
                   <Link to='/'>Retourner sur la page d'acceuil</Link>
              </section>
         )
    }
}

export default Error404
