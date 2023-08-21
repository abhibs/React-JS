import React, { Component } from 'react'

export default class Student extends Component {
    // state = {
    //     name: "Abhiram"
    // }

    state = {
        id: 1,
        name: "Abhiram"
    }

    // handleClick = () =>{
    //     console.log("Button Clicked");
    // }

    // handleClick = (id) =>{
    //     console.log(id);
    // }

    handleClick = (id) =>{
        console.log(id);
    }

    handleClickArg = () => {
        this.handleClick(this.state.id)
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                {/* <button onClick={this.handleClick("101")}>Click Me</button> */}
                <button onClick={this.handleClickArg}>Click Me</button>
            </div>
        )
    }
}
