import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return (
            <div>
                <p>Hello World From { this.props.name}</p>
            </div>
        )
    }
}

export default Hello
