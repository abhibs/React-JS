import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'

// ReactDOM.render(<Student name="Abhiram" roll="101"/>, document.getElementById('root'))
ReactDOM.render(<Student name="Abhiram" roll={100+2}/>, document.getElementById('root'))
