import React from 'react'

import Banner from '../layouts/Banner'
import Gallery from '../layouts/Gallery'

class Home extends React.Component {
    render(){
         return (
             <div> 
                 <Banner />
                 <Gallery />
             </div>
         )
    }
}

export default Home
