import React from 'react'

class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.title = this.props.title
        this.content = this.props.content
    }

    handleClick(){
        console.log('coucou')
    }

    render(){
        return(
            <div className="dropdown">
                <button onClick={ this.handleClick }>{ this.title }</button>
                <ul>
                { this.content[1] > -1 ? (
                    this.content.map((element) => (
                        <li>{ element }</li>
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