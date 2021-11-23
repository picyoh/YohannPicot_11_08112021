import React from 'react'
import { Link } from 'react-router-dom'

class Error404 extends React.Component {
    render(){
         return (
              <section className="error">
                   <h2>404</h2>
                   <div className="errorText">
                   <span>Oups! La page que&nbsp;</span>
                   <span>vous demandez n'existe pas.</span>
                   </div>
                   <Link to='/'>Retourner sur la page d'acceuil</Link>
              </section>
         )
    }
}

export default Error404
