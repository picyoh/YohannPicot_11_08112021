import React from 'react'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.title = this.props.title
        this.content = this.props.content
    }
    render(){
        console.log(this.title, this.content)
        return(
            <div>
                <select className="dropdown">
                   <option value={ this.title }>{ this.title }</option>
                    { this.title === 'equipments' ? (
                        this.content.map((element) => (
                            <option value={ element }> { element }</option>
                        ))
                    ) : (
                        <option value={ this.title }>{ this.content }</option>
                    )}
                </select>
            </div>
        )
    }
}
export default Dropdown