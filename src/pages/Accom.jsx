import React from 'react'
import { Redirect } from 'react-router'

import Carousel from '../components/Carousel'
import HostInfos from '../components/HostInfos'

import datas from '../datas/logements.json'

class Accom extends React.Component {

     /**
      * id de la page recupérée dans l'URL 
      * @param {String} hostId 
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
                   data ? (
                        <section>
                             <Carousel data={data} />
                             <HostInfos data={data} />
                        </section>
                   ) : (
                    <Redirect from='/acco/' to='/error404' />
                   )
         )
    }
}

export default Accom
