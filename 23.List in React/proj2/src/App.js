import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users: [
            {id: 101, name: "Abhiram", password: "fhdsa43"},
            {id: 102, name: "Anjan", password: "fdaff54"},
            {id: 103, name: "Aravind", password: "fdfkk34"},
        ],
        isLoggerIn:false
    }
    render() {
        return (
            <div>
                <h1>Id: {this.state.users[0].id} Name: {this.state.users[0].name} Password: {this.state.users[0].password}</h1>
                <h1>Id: {this.state.users[1].id} Name: {this.state.users[1].name} Password: {this.state.users[1].password}</h1>
                <h1>Id: {this.state.users[2].id} Name: {this.state.users[2].name} Password: {this.state.users[2].password}</h1>

            </div>
        )
    }
}
