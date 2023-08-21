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

    // handleClick = (id,j, e) =>{
    //     console.log(id);
    //     console.log(e);
    //     console.log(j);

    // }

    // handleClickArg = (e) => {
    //     this.handleClick(this.state.id, "101", e)
    // }

    handleClick = (id, e) =>{
        console.log(id);
        console.log(e);
    }



    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                {/* <button onClick={this.handleClick("101")}>Click Me</button> */}
                <button onClick={(e) => {
                    this.handleClick(this.state.id, e)
                }}>Click Me</button>
            </div>
        )
    }
}
