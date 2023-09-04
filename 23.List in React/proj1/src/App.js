import React, { Component } from 'react'

export default class App extends Component {
    render() {
        // const arr = [10, 20, 30, 40]
        const arr = this.props.numbers

        // console.log("Old Array :", arr);
        // const newArr = arr.map((num)=>{
        //     console.log("Num: ", num);
        //     return <li name="Abhiram">{num * 2}</li>
        // })
        // console.log("New Array: ", newArr);
        return (
        <ul>
            {/* {newArr} */}
            {
                // arr.map(num=>{
                //     return <li>{num}</li>
                // })
                arr.map(num=><li>{num}</li>)
            }
        </ul>
        )
    }
}
