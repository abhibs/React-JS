import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class App extends Component {
    state = {
        isLoggedIn : false
        // isLoggedIn : true
    }

    clickLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    clickOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let consumer;

        if(isLoggedIn){
            consumer = <User clickData = {this.clickOut}/>
        }
        else{
            consumer = <Guest clickData = {this.clickLogin} />
        }
        return <div>{consumer}</div>
    }
}
