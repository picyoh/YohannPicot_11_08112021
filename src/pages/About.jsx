import React from 'react'

import Banner from '../layouts/Banner'
import Dropdowns from '../layouts/DropsAbout'

class About extends React.Component {
    render(){
         return (
             <section>
                 <Banner />
                 <Dropdowns />
             </section>
         )
    }
}

export default About
