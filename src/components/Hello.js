import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return (
            <div className ='hello'>
                <p>Hello World From <strong> { this.props.name} </strong></p>
            <h1>Unordered List of Items</h1>
            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Banana</li>
                <li>Mango</li>
                <li>Gawa</li>
            </ul>
            <h1>Ordered List of Items</h1>
           <ol>
                <li>Apple</li>
                <li>Orange</li>
                <li>Banana</li>
                <li>Mango</li>
                <li>Gawa</li>
            </ol>
        <p> 10 + 15 = {10 +15 }</p>
            </div>
        )
    }
}

export default Hello
