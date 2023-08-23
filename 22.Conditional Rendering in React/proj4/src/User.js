import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <>
                <h1>Hello Abhiram</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </>
        )
    }
}
