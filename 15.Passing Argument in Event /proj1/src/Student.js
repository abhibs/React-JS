import React, { Component } from 'react'

export default class Student extends Component {
    state = {
        name: "Abhiram"
    }

    // handleClick = () =>{
    //     console.log("Button Clicked");
    // }

    handleClick = (id) =>{
        console.log(id);
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.handleClick("101")}>Click Me</button>
            </div>
        )
    }
}
