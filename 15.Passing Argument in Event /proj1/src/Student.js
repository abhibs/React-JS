import React, { Component } from 'react'

export default class Student extends Component {
    state = {
        name: "Abhiram"
    }

    handleClick = () =>{
        console.log("Button Clicked");
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
