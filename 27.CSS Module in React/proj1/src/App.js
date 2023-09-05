import React, { Component } from 'react'
import Styles from './App.module.css'
import User from './User'
export default class App extends Component {
    render() {
        return (
            <>
                <h1 className={Styles.txt}>Abhiram</h1>
                <User />
            </>
        )
    }
}
