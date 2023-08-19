import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'

// ReactDOM.render(<Student name="Abhiram" roll={101}/>, document.getElementById('root'))
// ReactDOM.render(<Student name="Abhiram" roll="101"/>, document.getElementById('root'))
ReactDOM.render(<Student name={1997} roll="101"/>, document.getElementById('root'))
