import React from 'react'
import pt from 'prop-types'

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

// Student.propTypes = {
//     name: pt.string,
//     roll: pt.number
// }

Student.propTypes = {
    name: pt.string.isRequired,
    roll: pt.number
}

Student.defaultProps = {
    name:"Abhiram"
}


export default Student
