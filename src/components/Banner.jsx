import React from 'react'

import bannerHome from '../assets/bannerHome.jpg'

class Banner extends React.Component {
    render(){
         return (
              <div>
                   <p>Chez vous, partout et ailleurs</p>
                   <img src={ bannerHome } alt="Bannière"/>
              </div>
         )
    }
}

export default Banner
