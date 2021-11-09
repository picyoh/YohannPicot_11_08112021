import React from 'react'

import bannerHome from '../assets/bannerHome.jpg'

class Banner extends React.Component {
    render(){
         return (
              <div className="banner">
                   <h2>Chez vous, partout et ailleurs</h2>
                   <img src={ bannerHome } alt="Bannière"/>
              </div>
         )
    }
}

export default Banner
