import React from 'react'

import { CgChevronDown, CgChevronUp } from 'react-icons/cg'

class Dropdown extends React.Component {

    /**
     * Dropdown class constructor for Dropdown component
     * 
     * @param {Object} props
     * @param {String} props.title
     * @param {String} props.content 
     * 
     */
    constructor(props){
        super(props)
        this.title = this.props.title
        this.content = this.props.content
        this.state = { isOpen:false }

        this.toggleDrop = this.toggleDrop.bind(this);
    }

    toggleDrop(){
        this.setState({isOpen : !this.state.isOpen })
    }

    render(){
        return(
            <div className="dropdown">
                <button onClick={ this.toggleDrop }>
                    { this.title }

                    <span>
                        {
                            this.state.isOpen ? (
                                <CgChevronUp />
                            ) : (
                                <CgChevronDown />
                            )
                        }
                    </span>

                </button>
                <ul className={ this.state.isOpen ? "open" : "" }>
                { this.content instanceof Array ? (
                    this.content.map((element, index) => (
                        <li key={ index }>{ element }</li>
                    ))
                ) : (
                    <li>{ this.content }</li>
                )}
                </ul>
            </div>
        )
    }
}
export default Dropdown