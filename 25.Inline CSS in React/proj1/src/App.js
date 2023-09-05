import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const btnStyle = {
            color: "blue",
            backgroundColor: 'orange'
        }
        return (
        <div>
            <button style={btnStyle}>Click Me</button>
        </div>
        )
    }
}
