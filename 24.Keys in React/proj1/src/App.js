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
                {
                    this.state.users.map(user=>{
                        return <h1 key={user.id}>Id: {user.id} Name: {user.name} Password: {user.password}</h1>
                    })
                }
            </div>
        )
    }
}
