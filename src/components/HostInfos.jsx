import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Dropdown from '../components/Dropdown'

const ratingA = [1, 2, 3, 4, 5]

class HostInfos extends React.Component {
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
            <article>
                <div className="title">
                <h3>{ this.title }</h3>
                <p>{ this.location }</p>
                </div>
                <div className="host">
                    <p>{ this.hostName }</p>
                    <img src={ this.hostPicture } alt={ this.hostName } />
                </div>
                <div className="tags">
                    {this.tags.map((tag, index) => (
                        <span key={ index }>{ tag }</span>
                    ))}
                </div>
                <div className="rate">
                    {ratingA.map((el) => (
                        el <= this.rating ?
                        (
                            <FontAwesomeIcon key={el} icon={ faStar } /> 
                        ) : (
                            <FontAwesomeIcon key={el} className="emptyStar" icon={ faStar } />
                        )
                    ))}
                </div>
                <Dropdown title="description" content={ this.description } />
                <Dropdown title="equipments" content={ this.equipments } />
            </article>
        )
    }
}
export default HostInfos