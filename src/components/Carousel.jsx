import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.title = this.props.data.title
        this.maxIndex = this.props.data.pictures.length - 1
        this.state = { currentIndex: 0 };
    }

    getPicture = () => {
        const result = this.props.data.pictures[this.state.currentIndex]
        return result
    }

    addIndex = () => {
        this.state.currentIndex < this.maxIndex ? (
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        ) : (
            this.setState({ currentIndex: 0 })
        )
    }

    subIndex = (currentIndex) => {
        this.state.currentIndex > 0 ? (
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        ) : (
            this.setState({ currentIndex: this.maxIndex })
        )
    }

    render(){
        const picture = this.getPicture()
        console.log(this.state.currentIndex, picture)
        return(
            <div>
                <FontAwesomeIcon icon={faChevronLeft} onClick={ this.subIndex } />
                <img src={ picture } alt={this.title }/>
                <FontAwesomeIcon icon={faChevronRight} onClick={ this.addIndex } /> 
            </div>
        )
    }
}
export default Carousel