import React, { Component } from 'react'
import Student from './Student'
export default class App extends Component {
    // constructor(){
    //     super()
    //     console.log("App Constructor Called");
    // }

    constructor(props){
        super(props)
        console.log("App Constructor Called");
        console.log(props);

        this.state = {
            roll: "101"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("app get derived state from props");
        console.log(props, state);
        return null
    }

    componentDidMount(){
        console.log("app component did mount - mounted")
    }

    render() {
        console.log("app rendered");
        return(
            <>
                <Student name="Abhiram"/>
            </>
        )
    }
}
