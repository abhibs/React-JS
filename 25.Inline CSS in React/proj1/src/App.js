import React, { Component } from 'react'

export default class App extends Component {
    render() {
        // const btnStyle = {
        //     color: "blue",
        //     backgroundColor: 'orange'
        // }

        // const txtColor = {
        //     color: "blue"
        // }

        // const txtFont = {
        //     fontSize: "80px"
        // }

        const txtColor = {
            color: "blue"
        }
        return (
        <div>
            {/* <button style={btnStyle}>Click Me</button> */}
            {/* <h1 style={{ ...txtColor, ...txtFont }}>Abhiram B S</h1> */}
            <h1 style={{ ...txtColor, ...{fontSize:"100px"} }}>Abhiram B S</h1>

        </div>
        )
    }
}
