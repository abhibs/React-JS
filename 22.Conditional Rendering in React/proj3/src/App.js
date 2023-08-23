import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class App extends Component {
    state = {
        // isLoggedIn : false
        isLoggedIn : true
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn
        if(isLoggedIn){
            return <User />
        }
        else{
            return <Guest />
        }
    }
}
