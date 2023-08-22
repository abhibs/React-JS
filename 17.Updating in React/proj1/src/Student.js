import React, { Component } from 'react'
import Mark from './Mark'
export default class Student extends Component {
    constructor(){
        super()
        this.state = {
            roll: 101
        }
    }
    clickHandle = () =>{
        console.log("Button Clicked");
        // this.setState({roll:102})
	    this.setState({ roll: this.state.roll + 2 });

    }
    render() {
        console.log("student rendered");
        return (
            <div>
                <Mark roll={this.state.roll}/>
                <button onClick={this.clickHandle}>Click Me</button>
            </div>
        )
    }
}
