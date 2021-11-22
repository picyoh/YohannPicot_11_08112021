import React from 'react'

import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

class Carousel extends React.Component {

    /**
     * Carousel class contructor for Carousel component
     * 
     * @param {Object} props
     * @param {String} props.title
     * @param {String | Array} props.pictures 
     */
    
    constructor(props){
        super(props)
        this.length = this.props.data.pictures.length
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

    subIndex = () => {
        this.state.currentIndex > 0 ? (
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        ) : (
            this.setState({ currentIndex: this.maxIndex })
        )
    }

    render(){
        const picture = this.getPicture()
        return(
            this.length > 2 ? (
                <article className="carousel">
                    <CgChevronLeft className="chevron-left" onClick={ this.subIndex } />
                    <img src={ picture } alt={this.title }/>
                    <CgChevronRight className="chevron-right" onClick={ this.addIndex } />
                    <p>{ this.state.currentIndex + 1 } / { this.length} </p> 
                </article>
            ) : (
                <article className="carousel">
                    <img src={ picture } alt={this.title }/>
                </article>
            )
        )
    }
}
export default Carousel