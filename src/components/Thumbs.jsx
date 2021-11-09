import React from 'react'
import { Link } from 'react-router-dom'

import datas from '../datas/logements.json'
const thumbsArray = [datas[1], datas[2], datas[3], datas[4], datas[5],datas[6]]

class Thumbs extends React.Component {
     render(){
         
         return (
              <div className="thumb">
                   {thumbsArray.map((thumb) => (
                        <Link to={'/lodging/' + thumb.id} key={ thumb.id }>
                             <img src={ thumb.cover } alt={ thumb.title } />
                             <p>{ thumb.title}</p>
                        </Link>
                   ))}
              </div>
         )
    }
}

export default Thumbs
