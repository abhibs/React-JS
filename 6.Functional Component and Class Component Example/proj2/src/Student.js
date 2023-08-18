import React from 'react'

// class Student extends React.Component{
//     render(){
//         return <h1>Hello Abhiram</h1>
//     }
// }


class Student extends React.Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}

export default Student