import React, { Component } from 'react'

export default class Student extends Component {
    handleClick(){
        console.log("Button Clicked", this);
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
