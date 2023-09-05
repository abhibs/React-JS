import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + "images/abhi.jpg" } alt="myPic" width="300px"></img>
            </div>
        )
    }
}
