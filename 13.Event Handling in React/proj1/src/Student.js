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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("Button Click ", this);
    }
    render() {
        return (
            <div>
                <h1>Hello Event</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
