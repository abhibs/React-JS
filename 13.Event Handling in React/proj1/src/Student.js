import React, { Component } from 'react'

export default class Student extends Component {
    // handleClick(){
    //     console.log("Button Clicked", this);
    // }

    // handleClick=()=>{
    //     console.log("Button Clicked", this);
    // }

    constructor(props) {
        super(props);
        this.state = {
            name: "Abhiram",
            roll : this.props.roll
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("Button Click ", this);
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.name} and Roll Number is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
