import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const arr = [10, 20, 30, 40]
        return (
        <ul>
            <li>{arr[0]}</li>
            <li>{arr[1]}</li>
            <li>{arr[2]}</li>
            <li>{arr[3]}</li>

        </ul>
        )
    }
}
