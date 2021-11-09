import React from 'react'

import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

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
