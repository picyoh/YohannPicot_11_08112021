import React from 'react'

import Carousel from '../components/Carousel'
import HostInfos from '../components/HostInfos'

import datas from '../datas/logements.json'

class Accom extends React.Component {
     /**
      * 
      * @param {*} hostId 
      * @returns 
      */
     fetchData = (hostId) => {
          let target = datas.filter( element => element.id === hostId)
          return target[0]
     }

    render(){
         const { hostId } = this.props.match.params;
         const data = this.fetchData(hostId)
         return (
              <section>
                   <Carousel data={data} />
                   <HostInfos data={data} />
              </section>
         )
    }
}

export default Accom
