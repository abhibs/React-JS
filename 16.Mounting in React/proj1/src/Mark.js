import React, { Component } from 'react'

export default class Mark extends Component {
  render() {
    console.log("mark rendered (child of student)");
    return (
      <div>
        <h1>Marks Component</h1>
      </div>
    )
  }
}
