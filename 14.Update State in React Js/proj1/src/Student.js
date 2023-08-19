import React, { Component } from "react";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Abhiram",
            roll: this.props.roll
        };
    }

    // handleClick = () => {
    //     this.setState({ name: "Anjan", roll: "102" });
    // };

    // handleClick = () => {
    //     this.setState((state) => {
    //         console.log(state);
    //     });
    // };
    // handleClick = () => {
    //     this.setState((state) => {
    //         console.log(state.name);
    //         console.log(state.roll);
    //     });
    // };

    handleClick = () => {
        this.setState((props) => {
            console.log(props.name);
            console.log(props.roll);
        });
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
