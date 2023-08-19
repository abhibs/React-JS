import React, { Component } from "react";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Abhiram",
            roll: this.props.roll
        };
    }

    handleClick = () => {
        this.setState({ name: "Anjan", roll: "102" });
    };

    render() {
        return (
            <div>
                <h1>
                    Hello, {this.state.name} Your Roll Number is {this.state.roll}
                </h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    } 
}

export default Student;
