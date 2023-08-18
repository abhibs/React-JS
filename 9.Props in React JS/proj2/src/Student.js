import React from 'react'

class Student extends React.Component{
    render(){
        return(
            <>
                <h1>Hello {this.props.name}</h1>
                <h2>Roll Number {this.props.roll}</h2> 
            </>
        )
    }
}

export default Student