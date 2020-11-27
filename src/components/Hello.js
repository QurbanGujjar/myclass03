import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return (
            <div>
                <p>Hello World From <strong> { this.props.name } </strong></p>
            </div>
        )
    }
}

export default Hello
