import React from 'react'
import { GrStar } from 'react-icons/gr'

import Dropdown from '../components/Dropdown'

const ratingA = [1, 2, 3, 4, 5]

class HostInfos extends React.Component {
    /**
     * 
     * @param {String} props.data.title
     * @param {String} props.data.location
     * @param {String} props.data.host.name
     * @param {String} props.data.host.picture
     * @param {Array} props.data.tags
     * @param {Number} props.data.rating
     * @param {String} props.data.description
     * @param {Array} props.data.equipements
     *  
     */
    constructor(props) {
        super(props)
        this.title = this.props.data.title
        this.location = this.props.data.location
        this.hostName = this.props.data.host.name
        this.hostPicture = this.props.data.host.picture
        this.tags = this.props.data.tags
        this.rating = this.props.data.rating
        this.description = this.props.data.description
        this.equipments = this.props.data.equipments
    }

    render(){
        return(
            <article className="hostInfos">
                <div className="title">
                <h3>{ this.title }</h3>
                <p>{ this.location }</p>
                </div>
                <div className="tags">
                    {this.tags.map((tag, index) => (
                        <span key={ index }>{ tag }</span>
                    ))}
                </div>
                <span className="rate">
                    {ratingA.map((el, index) => (
                        el <= this.rating ?
                        (
                            <span key={ index }><GrStar /></span>
                            
                        ) : (
                            <span key={ index } className="emptyStar"><GrStar /></span>
                        )
                    ))}
                </span>
                <span className="host">
                    <p>{ this.hostName }</p>
                    <img src={ this.hostPicture } alt={ this.hostName } />
                </span>
                <Dropdown title="description" content={ this.description } />
                <Dropdown title="equipments" content={ this.equipments } />
            </article>
        )
    }
}
export default HostInfos