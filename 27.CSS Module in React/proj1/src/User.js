import React, { Component } from 'react'
import Styles from './User.module.css'
import Styles2 from './App.module.css'
export default class User extends Component {
    render() {
        return (
            <>
                <h2 className={Styles.txt}>Javalli Tudoor Thirthahalli</h2>
                <h3 className={Styles2.txt}>MCA</h3>
            </>
        )
    }
}
