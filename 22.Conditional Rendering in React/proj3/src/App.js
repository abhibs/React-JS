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
        if(isLoggedIn){
            return <User clickData = {this.clickOut}/>
        }
        else{
            return <Guest clickData = {this.clickLogin} />
        }
    }
}
