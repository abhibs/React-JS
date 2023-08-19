import React, { Component } from 'react'

export class Student extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     name : "Abhiram"
        // }
        this.state = {
            name : "Abhiram",
            roll : this.props.roll
        }
    }
    render() {
        return <h1>Hello {this.state.name} and Roll Number is {this.state.roll}</h1>
    }
}

export default Student
