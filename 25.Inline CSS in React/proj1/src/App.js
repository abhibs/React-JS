import React, { Component } from 'react'

export default class App extends Component {
    render() {
        // const btnStyle = {
        //     color: "blue",
        //     backgroundColor: 'orange'
        // }

        const txtColor = {
            color: "blue"
        }

        const txtFont = {
            fontSize: "80px"
        }
        return (
        <div>
            {/* <button style={btnStyle}>Click Me</button> */}
            <h1 style={{ ...txtColor, ...txtFont }}>Abhiram B S</h1>
        </div>
        )
    }
}
