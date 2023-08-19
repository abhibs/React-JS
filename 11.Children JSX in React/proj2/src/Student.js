import React from 'react'

class Student extends React.Component {
    render() {
        return <h1>Hello Abhiram {this.props.children}</h1>;
    }
}

export default Student