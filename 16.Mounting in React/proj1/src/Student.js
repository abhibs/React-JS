import React, { Component } from 'react'
import Mark from './Mark'
export default class Student extends Component {
  render() {
    console.log("student rendered (child of app)")
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Mark />
      </div>
    )
  }
}
