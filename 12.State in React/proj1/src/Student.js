import React from 'react'

class Student extends React.Component{
    // state = {
    //     name:"Abhiram",
    //     roll: 101
    // }

    state = {
        name:"Abhiram",
        roll: this.props.roll
    }
    render(){
        return <h1>Hello {this.state.name} and Roll Number: {this.state.roll}</h1>
        
    }
}

export default Student