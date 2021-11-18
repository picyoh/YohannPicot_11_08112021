import React from 'react'
import { Link } from 'react-router-dom'

import datas from '../datas/logements.json'
const thumbsArray = []

class Thumbs extends React.Component {

     randomize(){
          while (thumbsArray.length < 6){
               const randI = Math.floor(Math.random() * (datas.length -1))
               console.log(randI)
               if(!thumbsArray.includes(datas[randI])) {
                    thumbsArray.push(datas[randI])
               }
          }
          return thumbsArray
     }

     render(){
         this.randomize(datas)
         return (
              <div className="thumbs">
                   {thumbsArray.map((thumb) => (
                        <Link to={'/acco/' + thumb.id} key={ thumb.id }>
                             <img src={ thumb.cover } alt={ thumb.title } />
                             <p>{ thumb.title}</p>
                        </Link>
                   ))}
              </div>
         )
    }
}

export default Thumbs
