import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const arr = [10, 20, 30, 40]
        console.log("Old Array :", arr);
        const newArr = arr.map((num)=>{
            console.log("Num: ", num);
            return <li>{num * 2}</li>
        })
        console.log("New Array: ", newArr);
        return (
        <ul>
            {newArr}
        </ul>
        )
    }
}
