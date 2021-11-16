import React from 'react'

import Banner from '../layouts/Banner'
import Thumbs from '../components/Thumbs'

class Home extends React.Component {
    render(){
         return (
             <section> 
                 <Banner />
                 <Thumbs />
             </section>
         )
    }
}

export default Home
